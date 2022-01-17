const express = require('express');
const app = express();
const port = require('./config.json').port;
const { server_info } = require('./utils');
const sqlite = require("./utils-sqlite");

const urlencodedParser = express.urlencoded({extended: false});

app.use("/css", express.static(__dirname + "/css"));
app.set("view engine", "hbs");

// const get_data = function (db, query, params) {
//     return new Promise(function (resolve, reject) {
//         if(params == undefined) params = [];
//         db.all(query, params, function (err, rows) {
//             if (err) {
//                 reject("Read error: " + err.message);
//             }
//             else {
//                 resolve(rows);
//             }
//         })
//     })
// };

// const get_data = function () {
//     let query = `SELECT * FROM languages`;
//     const db = new sqlite3.Database('./example.db');
    
//     db.all(query, [], (err, arr) => {
//         objects = arr
//             .filter(obj => obj.isLearning)
//             .map(obj => ({
//                 "lang": obj.lang,
//                 "level": parseInt(obj.level)
//         }));
//     });
    
//     db.close();    
// } 


// const print_data = async (query, res, message) => {
//     db = await('./example.db');
//     arr = await get_data(db, query);
//     // db.close();
//     res.render("app8.hbs", {"data": arr}, console.log(message));
// };

// app.get("/", function (req, res) { // как есть, без сортировки
//     let query = `SELECT lang, level FROM languages WHERE isLearning = True`;
//     print_data(query, res, 'Построение завершено...');
// });

// app.get("/:field.:direct", urlencodedParser, function (req, res) { // с параметрами
//     let field = req.params.field; // http://localhost:3000/lang.asc
//     let direct = req.params.direct;
//     // print_data(query + ` ORDER BY ${field} ${direct}`, res, 'Сортировка завершена...');
// });

app.listen(port, async () => {
    await sqlite.open('./example.db');
    let query = `SELECT * FROM languages`;
    arr = await sqlite.all(query);
    console.log(arr);
    server_info(port);
});
