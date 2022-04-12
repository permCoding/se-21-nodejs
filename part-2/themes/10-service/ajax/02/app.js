const express = require("express");
const path = require("path");

const app = express();

app.listen(3000);

app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "static", "index.html")));
