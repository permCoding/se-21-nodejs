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

// обработчики событий
app.get('/', (req, res) => {
    res.render("app5.hbs", 
        {username:"username", password:"password",
        hint: "Введите логин/пароль"}); 
});

app.post("/reg", urlencodedParser, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if ((username === "") || (password === "")) {
        res.render("app5.hbs", 
            {username:"username", password:"password",
            hint: "Не все поля определены"}); 
    }
    else {
        const users = require(file_db);
        let user_check = users.find(user => user.username === username);
        if (user_check !== undefined) {
            res.render("app5.hbs", 
                {username:"username", password:"password",
                hint: "Такой пользователь уже существует"}); 
        }
        else {
            let salt = bcrypt.genSaltSync(4);
            let hash = bcrypt.hashSync(password, salt);
            users.push({"username": username, "password": hash});
            fs.writeFile(file_db, JSON.stringify(users, null, 4), 
                () => console.log("Асинхронная запись данных закончена"));
            res.render("edit.hbs", 
                { username: username, result: "зарегистрирован" });
        }
    }
});

// запуск приложения
app.listen(port, server_info(port));
