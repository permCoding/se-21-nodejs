// подключение зависимостей
const express = require('express');
const params = require('./private/config.json').debug;

// настройка приложения
const app = express();
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// routing - маршрутизация
const router_index = require('./routes/sync-index');
const router_feed = require('./routes/sync-feed');
app.use('/', router_index);
app.use('/feed', router_feed);

// запуск приложения
app.listen(params.port, params.hostname, () => {
    console.log(`> ${params.hostname}:${params.port}`);
    console.log('> to stop: Ctrl+C');
});