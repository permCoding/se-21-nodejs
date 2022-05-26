// подключение зависимостей
const express = require('express');
const params = require('./private/config.json').debug;

const router_index = require('./routes/index');
const router_feed = require('./routes/feed');

// настройка приложения
const app = express();
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs'); // npm i ejs

// routing - обработчики событий
app.use('/', router_index);
app.use('/feed', router_feed);

// запуск приложения
app.listen(params.port, params.hostname, () => {
    console.log(`> ${params.hostname}:${params.port}/\n> to stop: Ctrl+C`);
});
