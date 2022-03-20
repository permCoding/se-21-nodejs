// добавим if в ejs для выбора содержимого

const express = require("express");
const path = require("path");

const pages = ["/", "/index", "/contacts", "/content"];

let data_render = { text: "~ ОБ ОРГАНИЗАЦИИ ~" };

const get_url = (page) => path.join(__dirname, "views_8", `${page}.ejs`);

const app = express();

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(3000, console.log("http://localhost:3000"));

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use((req, res, next) => {
    data_render.true_page = pages.includes(req.url);
    next();
});

app.get(pages, (req, res) => 
    res.render(get_url("index"), data_render)
);

app.use((req, res) => { 
    data_render.text = "404 нет такой страницы";
    res.status(404);
    res.render(get_url("index"), data_render);
});
