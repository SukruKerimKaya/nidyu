const fetch = require('node-fetch');
const fs = require('fs');

const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
if (!TOKEN) {
    console.error('FIGMA_ACCESS_TOKEN is not set.');
    process.exit(1);
}

const FILE_KEY = 'luq5YqCo81F5O8KTjRUEjm';
const NODE_IDS = '2:13972';

async function main() {
    const url = `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${NODE_IDS}`;
    try {
        const res = await fetch(url, {
            headers: { 'X-Figma-Token': TOKEN }
        });
        if (!res.ok) {
            const err = await res.text();
            console.error('Error fetching:', res.status, err);
            process.exit(1);
        }
        const data = await res.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

main();
