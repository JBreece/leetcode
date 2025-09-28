import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';  // Example file path

// basename
console.log('Base name:', path.basename(filePath)); // Output: test.txt

// dirname
console.log('Dir name:', path.dirname(filePath)); // Output: ./dir1/dir2

// extname
console.log('Ext name:', path.extname(filePath)); // Output: .txt

// parse
console.log('Parse:', path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// join
const joinedPath = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log('Joined path:', joinedPath);

// resolve
const resolvedPath = path.resolve('dir1', 'dir2', 'test.txt');
console.log('Resolved path:', resolvedPath);