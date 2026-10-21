const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/health') {
        res.writeHead(200);
        return res.end(JSON.stringify({
            status: 'OK',
            service: 'Order'
        }));
    }

    res.writeHead(200);
    res.end(JSON.stringify({
        service: 'Order',
        orders: [
            { id: 101, product: 'Laptop', status: 'Processing' },
            { id: 102, product: 'Mouse', status: 'Delivered' }
        ]
    }));
});

server.listen(3002, '0.0.0.0', () => {
    console.log('Order service running on port 3002');
});
