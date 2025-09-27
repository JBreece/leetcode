import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 200;
    //res.write('Hello, World!');
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end(JSON.stringify({ message: "Hello, World!" }));
    console.log(req.url);
    console.log(req.method);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello, World!</h1><p>This is a simple Node.js server.</p>');
});

//app.post('/users', () => {});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening on port ${PORT}`);
});