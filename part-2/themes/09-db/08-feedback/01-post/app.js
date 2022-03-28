// подключение внешних зависимостей
const express = require('express');
const fs = require('fs');
const { csv_to_json } = require('./private/tools');

// подключение своих модулей
const params = require('./private/config.json').debug;

// подготовка данных
const obj_data = { 
    title: "Оставить отзыв", 
    heading: "Форма онлайн отзыва", 
    button: "Отправить отзыв" 
};

// добавим данные в файл
const append_line = (name, feed) => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let date_time = `${year}-${month}-${day} ${hour}:${min}`;
    let line = `${date_time}|${name}|${feed}\n`;
    fs.appendFile("./private/feeds.csv", line, (err) => {
        if (err) return console.error(err);
    }
)};

// настройка приложения
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs'); // npm i ejs

// обработчики событий
app.get("/feedback", function(req, res) {
    res.render("feedback.ejs", obj_data);
});

app.post("/feedback", urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    append_line(req.body.name, req.body.feed);
    res.redirect("/");
});

app.get('/', function (req, res) {
    let arr = csv_to_json('./private/feeds.csv'); // заполним из csv
    res.render('index', { feeds: arr.reverse() }); // новые записи вверху списка
});

// запуск приложения
app.listen(params.port, params.hostname, 
    console.log(`${params.hostname}:${params.port}/`)
);
