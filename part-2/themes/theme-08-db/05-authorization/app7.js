// подключение внешних зависимостей
const express = require('express'); // https://www.npmjs.com/package/express
const bcrypt = require('bcryptjs'); // https://www.npmjs.com/package/bcryptjs
const fs = require('fs');
const sqlite = require('sqlite-sync'); // https://www.npmjs.com/package/sqlite-sync

// подключение своих модулей
const port = require('./static/config.json').port;
const server_info = require('./static/utils').server_info;

// настройка приложения
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use('/static', express.static(__dirname + '/static'));
app.set("view engine", "hbs");
const file_db = './static/users.db';
const hbs_reg = {
    username: "username", 
    password: "password", 
    hint: "Введите логин/пароль",
    title: "Регистрация",
    heading: "Пройти регистрацию"
};

// обработчики событий
app.get('/', (req, res) => {
    res.render("app7.hbs", hbs_reg);
});

app.post("/reg", urlencodedParser, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if ((username === "") || (password === "")) {
        hbs_reg.hint = "Не все поля определены";
        res.render("app7.hbs", hbs_reg);
    }
    else {
        sqlite.connect(file_db);
        let query = `SELECT username, password FROM user_data WHERE username = "${username}"`;
        let user_check = sqlite.run(query)[0];

        if (user_check !== undefined) {
            hbs_reg.hint = "Такой пользователь уже существует";
            res.render("app7.hbs", hbs_reg);
        }
        else {
            let salt = bcrypt.genSaltSync(4);
            let hash = bcrypt.hashSync(password, salt);
            let user_insert = { username: username, password: hash };
            sqlite.insert("user_data", user_insert, function (resp) {
                if (resp.error) throw resp.error;
                console.log(`Всего записей в БД - ${resp}`); // для контроля
                res.render("edit.hbs", { username: username, result: "зарегистрирован" });
            });
        }

        sqlite.close();
    }
});

// запуск приложения
app.listen(port, server_info(port));
