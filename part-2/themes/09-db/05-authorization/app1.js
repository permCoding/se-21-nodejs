// подключение внешних зависимостей
const express = require('express');

// подключение своих модулей
const port = require('./static/config.json').port;
const server_info = require('./static/utils').server_info;

// настройка приложения
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use('/static', express.static(__dirname + '/static'));
app.set("view engine", "hbs");

// обработчики событий
app.get('/', (req, res) => {
    res.render("app1.hbs", {username:"username", password:"password"});
});

app.post("/login", urlencodedParser, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    // console.log(username, password);
    const users = require('./static/users.json');
    let user_check = users.find(user => user.username === username);
    if (user_check) {
        let password_check = user_check.password === password;
        console.log(password_check);
        if (password_check) {
            res.render("edit.hbs", { username: user_check.username });
        }
        else {
            console.log('Ошибочный пароль пользователя.');
            res.redirect("/");    
        }
    }
    else { // user_check === undefined
        console.log('Такой пользователь не найден.');
        res.redirect("/");
    }
});

// запуск приложения
app.listen(port, server_info(port));
