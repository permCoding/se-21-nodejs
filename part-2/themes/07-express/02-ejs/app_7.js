// объект для шаблонизатора можно сформировать заранее в middleware
// проводим логирование некорректных адресов

const express = require("express");
const path = require("path");
const fs = require("fs");

let data_render; // данные для рендеринга страниц

const pages = ["/", "/index", "/content", "/contacts"]; // разрешённые адреса

const logger_fs = (log_data) => {
    let cur_time = new Date();
    let line_record = `time = ${cur_time.getHours()}:${cur_time.getMinutes()}; url_error = ${log_data}\n`;
    fs.appendFile("server.log", line_record, (err) => {
        if (err) return console.error(err);
        console.log('- log data appended...');
    }
)};

const logger_st = (log_data) => {
    let cur_time = new Date();
    let line_record = `time = ${cur_time.getHours()}:${cur_time.getMinutes()}; url_error = ${log_data}\n`;
    let logger = fs.createWriteStream('server.log', { flags: 'a' }); // 'a' means appending
    logger.write(line_record); // append string
    console.log('- log data appended...');
};

const url_error = (req, res) => {
    console.log(req.url);
    // logger_fs(req.url);
    logger_st(req.url);
    res.status(404);
    res.render(path.join(__dirname, "views_7", "index.ejs"), data_render);
};

const app = express();

// middleware
app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "public")));

app.use((req, res, next) => { // подготовка данных
    switch (req.url) {
        case "/":
        case "/index":
        case "/index.html":
            data_render = require('./static/config_index.json');
            break;
        case "/content":            
        case "/content.html":
            data_render = require('./static/config_content.json');
            break;
        case "/contacts":            
        case "/contacts.html":
            data_render = require('./static/config_contacts.json');
            break;
        default:
            data_render = { title: "ERROR", text: "404 нет такой страницы" };
            break;            
    }
    next();
});

// контроллеры mvc
app.get(pages, (req, res) => 
    res.render(path.join(__dirname, "views_7", "index.ejs"), data_render)
);

app.use(url_error); // middleware

// запуск прослушивания приложения
app.listen(3000);
