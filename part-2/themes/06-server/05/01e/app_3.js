const express = require("express");
const path = require("path");

const get_url = (page) => path.join(__dirname, "views", page);

const pages = [
    "index.html", "contacts.html", "content.html"
];

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
    res.sendFile(get_url("index.html"))
});

app.get("/:page", (req, res) => {
    let page = req.params.page;
    console.log(pages.includes(page));
    if (pages.includes(page)) 
        res.sendFile(get_url(page));
    else
        res.send("нет такой страницы");
});
