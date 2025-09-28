import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async(req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 200;
    //res.write('Hello, World!');
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end(JSON.stringify({ message: "Hello, World!" }));
    // console.log(req.url);
    // console.log(req.method);
    try{
        // Check if GET request
        if(req.method === 'GET'){
            let filepath;
            if(req.url === '/'){
                filepath = path.join(__dirname, 'public', 'index.html');
            } else if(req.url === '/about'){
                filepath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Invalid URL');
            }

            const data = await fs.readFile(filepath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Invalid request method');
        }
    } catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('<h1>500 Internal Server Error</h1><p>Something went wrong on the server.</p>');
    }


    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('<h1>Hello, World!</h1><p>This is a simple Node.js server.</p>');
});

//app.post('/users', () => {});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening on port ${PORT}`);
});