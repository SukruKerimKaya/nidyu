/**
 * Figma to GitHub Design Tokens Synchronizer
 * Bu betik, Figma'dan "Ready to Dev Final" dosyasinin içerisinden
 * stil(renk, font) degerlerini cekecek ve src/theme/figma-tokens.json seklinde biriktirecektir.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Çevresel (Environment) Değişkenler
const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_ID = 'luq5YqCo81F5O8KTjRUEjm';
const ROOT_NODE_ID = '2:8193'; // Ready to Dev Final

if (!FIGMA_TOKEN) {
    console.error('❌ FIGMA_ACCESS_TOKEN ortam değişkeni bulunamadı!');
    process.exit(1);
}

// Figma'dan Gelen Renk(RGBA) objesini HEX (#RRGGBB) yapisina ceviren yardimci fonksiyon
function rgbaToHex({ r, g, b, a }) {
    const toHex = (value) => {
        const hex = Math.round(value * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    if (a !== undefined && a < 1) {
        return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`.toUpperCase();
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// Figma Ağacını (Document Tree) dolaşıp Renk Değerlerini çıkaran fonksiyon
function extractDesignTokens(node, tokens) {
    if (!node) return;

    // Çerçeve (Frame) ve Renkli Bloklarını (Rectangle) incelemesi
    // Örnek: "Swatches" frame'i içerisindeki rectangle/vector nesnelerinin "fills" özellikleri
    if ((node.type === 'RECTANGLE' || node.type === 'VECTOR' || node.type === 'FRAME') && node.fills && node.fills.length > 0) {
        const validFill = node.fills.find(fill => fill.type === 'SOLID' && fill.visible !== false);
        if (validFill) {
            // Düğümün (Node) adını sanitize (temizleme) et
            const name = node.name.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
            // Yalnızca renk formatına benzeyen veya anlamlı frame isimlerini al
            tokens.colors[name] = rgbaToHex(validFill.color);
        }
    }

    // Tipografi (Text) nesnelerinin incelenmesi
    if (node.type === 'TEXT' && node.style) {
        const textName = node.name.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
        tokens.typography[textName] = {
            fontFamily: node.style.fontFamily,
            fontSize: node.style.fontSize,
            fontWeight: node.style.fontWeight,
            letterSpacing: node.style.letterSpacing,
            lineHeightPx: node.style.lineHeightPx
        };
    }

    // Eğer Düğümün çocukları (children) varsa onları da kontrol et
    if (node.children) {
        node.children.forEach(child => extractDesignTokens(child, tokens));
    }
}

// Figma REST API'sinden Nodes (Düğümler) Verisini Çekme 
async function fetchFigmaNodes() {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.figma.com',
            path: `/v1/files/${FIGMA_FILE_ID}/nodes?ids=${ROOT_NODE_ID}`,
            method: 'GET',
            headers: {
                'X-FIGMA-TOKEN': FIGMA_TOKEN
            }
        };

        console.log(`🌐 Figma API'ye istek atılıyor... (File ID: ${FIGMA_FILE_ID})`);

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                if (res.statusCode !== 200) {
                    reject(new Error(`Figma API Hatası: ${res.statusCode} - ${data}`));
                    return;
                }
                resolve(JSON.parse(data));
            });
        });

        req.on('error', (e) => reject(e));
        req.end();
    });
}

// Ana Başlangıç Akışı
async function main() {
    try {
        const figmaData = await fetchFigmaNodes();
        console.log('✅ Figma verisi başarıyla çekildi.');

        // Figma'nın Döndürdüğü Node Ağacını Alma
        const rootNode = figmaData.nodes[ROOT_NODE_ID.replace(':', ':')].document;

        const designTokens = {
            colors: {},
            typography: {}
        };

        console.log('🔍 Tasarım bileşenleri ve renkler (tokens) ayrıştırılıyor...');
        extractDesignTokens(rootNode, designTokens);

        // Çıktı Dosyasının (JSON) Hazırlanması
        const outputDir = path.join(__dirname, '../src/theme');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const outputPath = path.join(outputDir, 'figma-tokens.json');
        fs.writeFileSync(outputPath, JSON.stringify(designTokens, null, 2), 'utf-8');

        console.log(`🎉 Başarılı! Figma tasarım dosyası "${outputPath}" adresine kaydedildi.`);
        console.log(`   - Çıkarılan Renk Sayısı: ${Object.keys(designTokens.colors).length}`);
        console.log(`   - Çıkarılan Tipografi Sayısı: ${Object.keys(designTokens.typography).length}`);

    } catch (error) {
        console.error('❌ Eşitleme sırasında hata oluştu:', error.message);
        process.exit(1);
    }
}

main();
