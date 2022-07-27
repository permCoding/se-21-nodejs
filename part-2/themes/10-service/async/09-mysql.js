// npm i --save mysql2
const mysql = require("mysql2");
  
const conn = mysql.createConnection({
    host: "mysql93.1gb.ru",
    user: "gb_testnode",
    database: "gb_testnode",
    password: "DFcwj8D2-RAE"
});

const start = Date.now();

let query_ = `SELECT Composer FROM tracks WHERE tracks.GenreId > `;

conn.connect();

for (let i = 0; i < 12; i++) {
    let query = query_ + String(i);
    conn.query(query, (err, results, fields) => {
        if (err) throw err;
        console.table(`i = ${i};\t${Date.now()-start}ms`);
    });
}

console.log('- - - test async - - - ');

conn.end();
