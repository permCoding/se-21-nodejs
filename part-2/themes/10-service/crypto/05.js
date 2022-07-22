const crypto = require('crypto');
const fs = require('fs');

// https://www.geeksforgeeks.org/node-js-crypto-pbkdf2-method/
// crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)

let arr = [
    'qwerty',
    '123456',
    '0000',
    'test',
    'password'
];

let hashes = [];
for (let item of arr) {
    let hash = crypto.pbkdf2Sync(item, 'salt', 1000, 32, "sha512");
    let h = { 
        'item': item, 
        'hash': hash.toString('hex') 
    };
    hashes.push(h);
}

console.table(hashes);

const jsonContent = JSON.stringify(hashes, null, 4); // https://learn.javascript.ru/json
fs.writeFile("./hashes.json", jsonContent, 'utf8', err => {
    if (err) throw err;
    console.log("The file with hashes was saved.");
});
