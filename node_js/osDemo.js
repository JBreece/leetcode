import os from 'os';

// userInfo()
console.log(os.userInfo());

// totalmem()
console.log(`Total Memory: ${os.totalmem()} bytes`);

// freemem()
console.log(`Free Memory: ${os.freemem()} bytes`);

// cpu()
console.log('CPU Info:', os.cpus());

// uptime()
console.log(`System Uptime: ${os.uptime()} seconds`);