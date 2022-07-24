// npm i --save mysql2
const mysql = require("mysql2");
  
const conn = mysql.createConnection({
    host: "mysql93.1gb.ru",
    user: "gb_testnode",
    database: "gb_testnode",
    password: "DFcwj8D2-RAE"
});

let query = `SELECT * FROM tracks WHERE tracks.GenreId > 10`;

conn.connect((err) => {
    if (err) return console.error("Ошибка: " + err.message);
    console.log("Подключение к серверу MySQL успешно установлено");
});

conn.query(query, (err, results, fields) => {
    console.log(err);
    console.log(results); // собственно данные
    console.log(fields); // мета-данные полей 
});

conn.end((err) => {
    if (err) return console.log("Ошибка: " + err.message);
    console.log("Подключение закрыто");
});
