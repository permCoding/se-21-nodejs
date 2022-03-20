const express = require("express");
const path = require("path");

const get_url = (page) => path.join(__dirname, "views", `${page}.html`);

const app = express();

app.listen(3000, (err) => {
    if (err) console.error(err);
    else console.log("http://localhost:3000");
});

app.get(["/", "/index.html"], (req, res) => res.sendFile(get_url("index")));

app.get("/contacts.html", (req, res) => res.sendFile(get_url("contacts")));

app.get("/content.html", (req, res) => res.sendFile(get_url("content")));

app.use((req, res) => res.send("404 error")); // middleware
