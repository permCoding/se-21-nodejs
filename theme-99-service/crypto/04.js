const crypto = require('crypto');

let id = crypto
    .randomBytes(5)
    .toString('hex');

let arr = id.match(/.{1,2}/g);
console.log(arr);

console.log(`id -> ${id}`);
console.log(arr.join(" "));

console.log(arr
    .map(item => parseInt(item, 16))
    .join(" "));
