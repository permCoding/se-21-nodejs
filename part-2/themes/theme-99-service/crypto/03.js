// https://www.npmjs.com/package/bcryptjs
const bcrypt = require('bcryptjs'); 

const secret = 'password';

let salt = bcrypt.genSaltSync(4);
let hash = bcrypt.hashSync(secret, salt);

console.log(hash);
