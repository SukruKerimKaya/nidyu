const https = require('https');
const fs = require('fs');

const req = https.request({
  hostname: 'api.figma.com',
  path: '/v1/files/luq5YqCo81F5O8KTjRUEjm/nodes?ids=2:8193',
  method: 'GET',
  headers: { 'X-FIGMA-TOKEN': process.env.FIGMA_ACCESS_TOKEN }
}, (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    fs.writeFileSync('scripts/debug-figma.json', JSON.stringify(JSON.parse(data), null, 2));
    console.log('Saved to scripts/debug-figma.json');
  });
});
req.end();
