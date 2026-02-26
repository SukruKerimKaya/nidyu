const fs = require('fs');
const doc = require('./scripts/debug-figma-all.json').document;

const tokens = { colors: {}, typography: {} };

function rgbaToHex({ r, g, b, a }) {
    const toHex = (v) => {
        const h = Math.round(v * 255).toString(16);
        return h.length === 1 ? '0' + h : h;
    };
    if (a !== undefined && a < 1) return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`.toUpperCase();
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function extract(node) {
    if (!node) return;
    
    // Check if it's a Colors group/frame
    if (node.name.includes('Colors') || node.name.includes('Color Token')) {
        // Let's recursively find rectangles or ellipses with fills
        function getColors(n) {
            if ((n.type === 'RECTANGLE' || n.type === 'ELLIPSE' || n.type === 'VECTOR') && n.fills) {
                const fill = n.fills.find(f => f.type === 'SOLID' && f.visible !== false);
                if (fill && fill.color) {
                    const cleanName = n.name.replace(/[^a-zA-Z0-9]/g, '');
                    if(cleanName.length > 0) {
                      let baseName = cleanName.charAt(0).toLowerCase() + cleanName.slice(1);
                      tokens.colors[baseName] = rgbaToHex(fill.color);
                    }
                }
            }
            if(n.children) n.children.forEach(getColors);
        }
        getColors(node);
    }
    
    // Check if Typography group/frame
    if (node.name.includes('Typograph') || node.name.includes('Text Token')) {
        function getTypo(n) {
            if (n.type === 'TEXT' && n.style) {
                 const cleanName = n.name.replace(/[^a-zA-Z0-9]/g, '');
                 if(cleanName.length > 0) {
                    let baseName = cleanName.charAt(0).toLowerCase() + cleanName.slice(1);
                    tokens.typography[baseName] = {
                        fontFamily: n.style.fontFamily,
                        fontSize: n.style.fontSize,
                        fontWeight: n.style.fontWeight,
                        letterSpacing: n.style.letterSpacing,
                        lineHeightPx: n.style.lineHeightPx
                    };
                 }
            }
            if(n.children) n.children.forEach(getTypo);
        }
        getTypo(node);
    }

    if (node.children) {
        node.children.forEach(extract);
    }
}

extract(doc);
console.log(JSON.stringify(tokens, null, 2));
