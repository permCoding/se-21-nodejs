// объект для шаблонизатора можно сформировать заранее
// + middleware

const express = require("express");
const path = require("path");

const data_render = require('./static/config.json'); // подготовка данных

const get_url = (page) => path.join(__dirname, "views_4", `${page}.ejs`);

const app = express();

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(3000);

app.use((req, res, next) => {
    console.log(req.url);
    next();
}); // middleware

app.get(["/", "/index"], (req, res) => {
    data_render.text = "ОБ ОРГАНИЗАЦИИ";
    res.render(get_url("index"), data_render);
});

app.get("/contacts", (req, res) => { 
    data_render.text = "КОНТАКТЫ ОРГАНИЗАЦИИ";
    res.render(get_url("index"), data_render);
});

app.get("/content", (req, res) => { 
    data_render.text = "ДЕЯТЕЛЬНОСТЬ ОРГАНИЗАЦИИ";
    res.render(get_url("index"), data_render);
});

app.use((req, res) => {
    res.status(404);
    res.render(get_url("error"), data_render);
}); // middleware
