const express = require("express");
const path = require("path");

const get_url = (page) => path.resolve(__dirname, "views", `${page}.html`);

const app = express();

app.listen(3000, (err) => { if (err) console.error(err); });

app.get(["/", "/index.html"], (req, res) => res.sendFile(get_url("index")));

app.get("/contacts.html", (req, res) => res.sendFile(get_url("contacts")));

app.get("/content.html", (req, res) => res.sendFile(get_url("content")));

app.use((req, res) => res.send("404 error")); // middleware
