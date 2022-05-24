const { checkUser } = require('./module04');

let result = checkUser('./users.json');

let message = result.check? "разрешён": "запрещён";

console.log(`Пользователю ${result.login} доступ к БД ${message}`);
