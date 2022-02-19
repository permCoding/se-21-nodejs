// подключение внешних зависимостей
const express = require('express');
const bcrypt = require('bcryptjs');
const fs = require('fs');

// подключение своих модулей
const port = require('./static/config.json').port;
const server_info = require('./static/utils').server_info;

// настройка приложения
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use('/static', express.static(__dirname + '/static'));
app.set("view engine", "hbs");
const file_db = './static/users_hash.json';
let settings = {
    user: {
        username:"username",
        password:"password"
    },
    hint: "Введите логин/пароль"
};

// обработчики событий
app.get('/', (req, res) => { res.render("app5a.hbs", settings)});

app.post("/reg", urlencodedParser, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if ((username === "") || (password === "")) {
        settings.hint = "Не все поля определены";
        res.render("app5a.hbs", settings);
    }
    else {
        const users = require(file_db);
        let user_check = users.find(user => user.username === username);
        if (user_check !== undefined) {
            settings.hint = "Такой пользователь уже существует";
            res.render("app5a.hbs", settings);
        }
        else {
            users.push({"username": username, "password": password});
            fs.writeFileSync(file_db, JSON.stringify(users, null, 4));
            res.render("edit.hbs", 
                { username: username, result: "зарегистрирован" });
        }
    }
});

// запуск приложения
app.listen(port, server_info(port));
