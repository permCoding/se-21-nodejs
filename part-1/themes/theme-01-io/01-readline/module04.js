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

const checkUser = (file_db) => {
    let result = false;
    let userData = getUser();
    const users = require(file_db);    
    let user_find = users.find(user => user.login === userData.login);
    if (user_find === undefined) {
        console.log('Такой пользователь не найден.');
    }
    else {
        result = user_find.password === userData.password;
    }    
    return {login: userData.login, check: result}
}

module.exports = {
    checkUser
}
