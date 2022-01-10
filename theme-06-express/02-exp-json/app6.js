const app = require('express')(); // сразу создать объект
const port = require('./config.json').port; // сразу порт
const es = require('./db.json'); // загрузить данные
const server_info = require('./utils').server_info;
let quest;

const get_menu = () => {
    let answers = es.dict[quest];
    let items_menu = answers
        .map((answer, index) => String(index+1) + ') ' + answer)
        .join('<br>');
    return '<h2>' + quest + ':</h2><hr>' + 
        '<h3>' + items_menu + '</h3><hr>';
};

app.get('/', (req, res) => {
    quest = es.start;
    res.send(get_menu(quest));
});

app.get('/:index', (req, res) => {
    let index = req.params.index - 1;
    quest = es.dict[quest][index];
    res.send(get_menu(quest));
});

app.listen(port, server_info(port));
