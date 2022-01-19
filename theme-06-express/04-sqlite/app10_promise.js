// подключение внешних зависимостей
const express = require('express');
const _ = require('lodash');

// подключение своих модулей
const { port } = require('./config.json');
const { server_info } = require('./utils');
const sqlite = require("./utils-sqlite");

// настройка приложения
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use("/css", express.static(__dirname + "/css"));
app.set("view engine", "hbs");

// загрузка данных и запуск приложения
let arr = []; // массив с объектами
app.listen(port, async () => {
    server_info(port);

    await sqlite.open('./example.db');
    let query = `SELECT * FROM languages`;
    arr = await sqlite.all(query);
    sqlite.close();
    
    console.log(arr); // это для контроля
});

// обработчики событий
app.get("/", function (req, res) { // как есть, без сортировки
    res.render("app8.hbs", {"data": arr}, console.log('Построение завершено...'));
});

app.get("/:field.:direct", urlencodedParser, function (req, res) { // с параметрами
    let field = req.params.field; // http://localhost:3000/lang.asc
    let direct = req.params.direct;
    let arr_sort = _(arr).orderBy(field, direct).value();
    res.render("app8.hbs", {"data": arr_sort}, console.log('Сортировка завершена...'));
});
