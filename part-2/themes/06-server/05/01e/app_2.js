const express = require("express");
const path = require("path");

const get_url = (page) => path.join(__dirname, "views", page);

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
    res.sendFile(get_url("index.html"))
});

app.get("/:page", (req, res) => {
    res.sendFile(get_url(req.params.page))
});
