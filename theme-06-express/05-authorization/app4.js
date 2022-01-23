// подключение внешних зависимостей
const express = require('express');
const bcrypt = require('bcryptjs');

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
    res.render("app4.hbs", {username:"username", passwors:"password"}); 
});

app.post("/reg", urlencodedParser, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if ((username == "") || (password == "")) {
        console.log("Не все поля определены");
        res.redirect("/");
    }
    else {
        const users = require('./static/users_hash.json');
        let user_check = users.find(user => user.username === username);
        if (user_check != undefined) {
            console.log('Такой пользователь уже существует.');
            res.redirect("/");
        }
        else {
            console.log('Можно добавлять в БД.');
            res.redirect("/");
        }    
    }
});

// запуск приложения
app.listen(port, server_info(port));
