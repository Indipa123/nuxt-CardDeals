const https = require('https');
https.get('https://burst.shopify.com/photos/search?q=clothing', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const urls = new Set();
        const regex = /<img[^>]+src=\"(https:\/\/burst\.shopifycdn\.com\/photos\/[^\"]+)\"/g;
        let match;
        while ((match = regex.exec(data)) !== null) {
            if (!match[1].includes('thumb')) {
                urls.add(match[1]);
            }
        }
        console.log(JSON.stringify(Array.from(urls).slice(0, 30), null, 2));
    });
}).on('error', console.error);
