const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./chinook/chinook.db');

const start = Date.now();

let query = `SELECT * FROM tracks WHERE tracks.GenreId > ?`;

for (let i = 0; i < 12; i++) {
    db.all(query, [i], (err, arr) => {
        if (err) throw err;
        console.table(`i = ${i};\t${Date.now()-start}ms`);
    });
} // тут вызов запроса SQL будет опять хаотичен
// но база данных SQLite однопользовательская - поэтому
// вывод будет с каждым шагом всё отодвигаться по времени
