// подключение внешних зависимостей
const express = require('express');
const _ = require('lodash');
const sqlite = require('sqlite-sync'); // https://www.npmjs.com/package/sqlite-sync

// подключение своих модулей
const port = require('./config.json').port;
const { server_info } = require('./utils');

// вспомогательная функция получения и преобразования данных
const get_data = function (filename, query) {
    sqlite.connect(filename);
    let arr = sqlite.run(query);
    sqlite.close();
    return arr // преобразуем объекты
        .map(obj => ({
            "lang": obj.lang, 
            "level": parseInt(obj.level)
        }));
};

// получение данных
let arr = get_data("./example.db", `SELECT * FROM languages`);
console.log(arr); // для контроля

// настройка и запуск приложения
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use("/css", express.static(__dirname + "/css"));
app.set("view engine", "hbs");
app.listen(port, server_info(port));

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
