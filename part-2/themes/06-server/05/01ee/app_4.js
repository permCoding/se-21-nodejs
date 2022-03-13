const express = require("express");
const path = require("path");






// можно сделать вместо header отдельного файла
// формирование меню в цикле ejs
// а данные брать из json-файла


const get_url = (page) => path.join(__dirname, "views_3", `${page}.ejs`);

const app = express();

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(3000);

app.get(["/", "/index"], (req, res) => res.render(get_url("index")));

app.get("/contacts", (req, res) => res.render(get_url("contacts")));

app.get("/content", (req, res) => res.render(get_url("content")));

app.use((req, res) => res.send("404 error")); // middleware
