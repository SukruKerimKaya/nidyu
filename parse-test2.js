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
    
    if (node.name === 'Colors Tokens') {
        function getColors(n) {
            if ((n.type === 'RECTANGLE' || n.type === 'ELLIPSE' || n.type === 'VECTOR') && n.fills) {
                const fill = n.fills.find(f => f.type === 'SOLID' && f.visible !== false);
                if (fill && fill.color) {
                    const cleanName = n.name.replace(/[^a-zA-Z0-9_-]/g, '');
                    if(cleanName.length > 0) {
                        tokens.colors[cleanName] = rgbaToHex(fill.color);
                    }
                }
            }
            if(n.children) n.children.forEach(getColors);
        }
        getColors(node);
        return; // Don't traverse children normally
    }
    
    if (node.name === 'Typography Tokens' || node.name === 'Text Block') {
        function getTypo(n) {
            if (n.type === 'TEXT' && n.style) {
                 const cleanName = n.name.replace(/[^a-zA-Z0-9_-]/g, '');
                 if(cleanName.length > 0) {
                    tokens.typography[cleanName] = {
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
        return;
    }

    if (node.children) node.children.forEach(extract);
}

extract(doc);
console.log(JSON.stringify(tokens, null, 2));
