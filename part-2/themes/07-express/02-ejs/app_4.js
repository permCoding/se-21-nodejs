/* 
    вместо отдельного файла header и нескольких файлов
    index, contacts, content будем формировать меню 
    динамически в цикле ejs, а данные брать из json-файла
*/

const express = require("express");
const path = require("path");

const get_url = (page) => path.join(__dirname, "views_4", `${page}.ejs`);

const app = express();

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(3000);

app.get(["/", "/index"], (req, res) => {
    res.render(get_url("index"), {
        title: "server",
        items: ["index", "content", "contacts"],
        text: "ОБ ОРГАНИЗАЦИИ"
    });
});

app.get("/contacts", (req, res) => { 
    res.render(get_url("index"), {
        title: "server",
        items: ["index", "content", "contacts"],
        text: "КОНТАКТЫ ОРГАНИЗАЦИИ"
    });
});

app.get("/content", (req, res) => { 
    res.render(get_url("index"), {
        title: "server",
        items: ["index", "content", "contacts"],
        text: "ДЕЯТЕЛЬНОСТЬ ОРГАНИЗАЦИИ"
    });
});

app.use((req, res) => {
    res
        .status(404)
        .render(get_url("index"), {
            title: "server",
            items: ["index", "content", "contacts"],
            text: "нет такой страницы"
        });
}); // middleware
