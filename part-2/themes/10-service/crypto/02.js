// алгоритм хеширования 
// https://ru.wikipedia.org/wiki/MD5

const crypto = require('crypto');

const secret = 'password';

const hash = crypto
    .createHmac('sha256', secret)
    .update('secret_shared_key')
    .digest('hex');

console.log(hash);
