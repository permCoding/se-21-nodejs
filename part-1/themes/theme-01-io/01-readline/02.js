const readline = require('readline-sync');

const getUser = () => {
    console.log('Введите login?');
    let userLogin = readline.question();
    
    console.log('Введите password?');
    let userPassword = readline.question('', {
        hideEchoBack: true // symbols as `*`
    });
    return {login: userLogin, password: userPassword};
}

let password = "qwerty";
let userData = getUser();
let message = password==userData.password? "разрешён": "запрещён";

console.log(`Пользователю ${userData.login} доступ к БД ${message}`);
