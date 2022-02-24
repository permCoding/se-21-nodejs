const express = require('express');
const path = require('path');

const app = express();

const get_path = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(3000, (error) => {
    error? console.error(error): console.log(`http://localhost:3000`);
});

app.get(['/', '/start', '/index', '/home'], (req, res) => {
    res.sendFile(get_path('index'));
});

app.get('/contacts', (req, res) => {
    res.sendFile(get_path('contacts'));
});

app.get('/about', (req, res) => {
    res.redirect('/contacts');
});

app.use((req, res) => {
    res
        .status(404)
        .sendFile(get_path('error'));
});