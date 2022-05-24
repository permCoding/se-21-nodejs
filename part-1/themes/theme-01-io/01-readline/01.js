const readline = require('readline-sync');


console.log('Введите login?');
let userLogin = readline.question();

console.log('Введите password?');
let userPassword = readline.question('', {
    hideEchoBack: true // symbols as `*`
});

let password = "qwerty";
let message = password==userPassword? "разрешён": "запрещён";

console.log(`Пользователю ${userLogin} доступ к БД ${message}`);
