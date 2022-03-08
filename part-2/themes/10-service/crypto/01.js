// алгоритм хеширования 
// https://ru.wikipedia.org/wiki/MD5

const crypto = require('crypto');

const secret = 'password';

const hash = crypto
    .createHash("md5")
    .update(secret)
    .digest("hex");

console.log(hash);
