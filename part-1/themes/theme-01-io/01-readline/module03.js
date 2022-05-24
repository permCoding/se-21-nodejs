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

module.exports = {
    getUser
}
