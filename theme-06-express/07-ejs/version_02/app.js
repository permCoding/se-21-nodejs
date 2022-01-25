// подключение внешних зависимостей
const express = require('express');

// подключение своих модулей
const params = require('./static/config.json').debug;
const server_info = require('./static/utils.js').server_info;

// подготовка данных
const db = require('./static/db.json');
obj_data = { 
    title: db.title, 
    heading: db.heading, 
    hint: "Кликни на заголовок таблицы для сброса" 
};

// настройка приложения
const app = express();
app.use('/static', express.static(__dirname + '/static'));
app.set('view engine', 'ejs'); // npm i ejs

// обработчики событий
app.get('/quest/:quest', function (req, res) {
    obj_data.quest = req.params.quest;
    obj_data.answers = db.dict[obj_data.quest];

    if (typeof obj_data.answers == 'undefined') { // если уже достигнут листок дерева
        obj_data.quest = `Выбор сделан -> ${obj_data.quest.toUpperCase()}`; // публикуем выбор
        obj_data.answers = [];
    }
    else {
        if (obj_data.answers.length == 0) { // если нет ответов на вопрос
            obj_data.quest = `Для категории "${obj_data.quest}" нет выбора.`;
        }
    }
    res.render('index', obj_data);    
});

app.get(['/', '/start'], function (req, res) {
    obj_data.quest = db.start;
    obj_data.answers = db.dict[db.start];
    res.render('index', obj_data);
});

// запуск приложения
app.listen(params.port, params.hostname, server_info(params.port));
