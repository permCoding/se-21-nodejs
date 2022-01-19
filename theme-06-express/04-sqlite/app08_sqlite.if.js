const express = require('express');
const app = express();
const port = require('./config.json').port;
const { server_info } = require('./utils');
const sqlite3 = require('sqlite3').verbose();
const urlencodedParser = express.urlencoded({extended: false});

app.use("/css", express.static(__dirname + "/css"));
app.set("view engine", "hbs");
let query = `SELECT * FROM languages`;

const print_data = (query, res, message) => {
    const db = new sqlite3.Database('./example.db');
    db.serialize(() => {
        db.all(query, [], (err, arr) => {
            res.render("app8.if.hbs", {"data": arr}, console.log(message));
        });
    });
    db.close();
};

app.get("/", function (req, res) { // как есть, без сортировки
    print_data(query, res, 'Построение завершено...');
});

app.get("/:field.:direct", urlencodedParser, function (req, res) { // с параметрами
    let field = req.params.field; // http://localhost:3000/lang.asc
    let direct = req.params.direct;
    print_data(query + ` ORDER BY ${field} ${direct}`, res, 'Сортировка завершена...');
});

app.listen(port, server_info(port));
