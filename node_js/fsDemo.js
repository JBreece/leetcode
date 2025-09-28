//import fs from 'fs';
import { write } from 'fs';
import fs from 'fs/promises';

// // readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log('Read file using callback:', data);
// });

// // readFileSync() - synchronous
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log('Read file using sync:', data);

// readFile() - promise .then()
// fs.readFile('./test.txt', 'utf8')
//     .then(data => {
//         console.log('Read file using promise:', data);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// readFile() - async/await
const readFileAsync = async () => {
    try{
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log('Read file using async/await:', data);
    } catch(err){
        console.error(err);
    }
}

// writeFile() - async/await
const writeFileAsync = async () => {
    try{
        await fs.writeFile('./test.txt', 'Hello, I am writing to a file using async/await!');
        console.log('File written successfully');
        readFileAsync();
    } catch(err){
        console.error(err);
    }
}

// appendFile() - async/await
const appendFileAsync = async () => {
    try{
        await fs.appendFile('./test.txt', '\nAppended line using async/await!');
        console.log('File appended to...');
    } catch (error) {
        console.error(err);
    }
}

writeFileAsync();
appendFileAsync();
readFileAsync();
