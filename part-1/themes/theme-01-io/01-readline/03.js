const tools = require("./module03");

let password = "qwerty";
let userData = tools.getUser();
let message = password==userData.password? "разрешён": "запрещён";

console.log(`Пользователю ${userData.login} доступ к БД ${message}`);
