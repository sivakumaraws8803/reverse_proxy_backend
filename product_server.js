const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/health') {
        res.writeHead(200);
        return res.end(JSON.stringify({
            status: 'OK',
            service: 'Product'
        }));
    }

    res.writeHead(200);
    res.end(JSON.stringify({
        service: 'Product',
        products: [
            { id: 1, name: 'Laptop', price: 50000 },
            { id: 2, name: 'Mouse', price: 500 },
            { id: 3, name: 'Keyboard', price: 1200 }
        ]
    }));
});

server.listen(3001, '0.0.0.0', () => {
    console.log('Product service running on port 3001');
});
