// роутинг express

const express = require("express");
const path = require("path");

const get_url = (page) => path.join(__dirname, "views_1", `${page}.ejs`);

const app = express();

app.set("view engine", "ejs");

app.listen(3000, (err) => { if (err) console.error(err); });

app.get(["/", "/index"], (req, res) => res.render(get_url("index")));

app.get("/contacts", (req, res) => res.render(get_url("contacts")));

app.get("/content", (req, res) => res.render(get_url("content")));

app.use((req, res) => res.send("404 error")); // middleware
