import crypto from 'crypto';

// createHash()
// const hash = crypto.createHash('sha256');
// hash.update('Hello, World!');
// console.log('Hash:', hash.digest('hex'));

// crypto.randomBytes(16, (err, buf) => {
//   if (err) throw err;
//   console.log('Random Bytes:', buf.toString('hex'));
// });

// createCipheriv() and createDecipheriv()
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, World!', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);