import url from 'url';

const myURL = new URL('https://example.com:8000/path/name?query=string&query2=string2&query3=string3#hash');

// URL Object
const urlObj = new URL(myURL);

console.log(urlObj);

// format()
console.log(url.format(urlObj));

// import.meta.url - file URL
console.log(import.meta.url);

// fileURLToPath()
const __filename = url.fileURLToPath(import.meta.url);
console.log(__filename);

const params = new URLSearchParams(urlObj.search);
console.log(params.get('query'));
params.append('limit', '10');
params.delete('limit');

console.log(params);

// Added this to demonstrate processing query parameters
let query2 = "";
const entries = Array.from(params.entries());
const mappedParams = entries.map(([key, value]) => ({ key, value }));
for (const param of mappedParams) {
    if (param.key === 'query2') {
        query2 = param.value;
    }
}
console.log('query2:', query2);