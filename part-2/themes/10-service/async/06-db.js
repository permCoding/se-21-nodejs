const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./chinook/chinook.db');

const start = Date.now();

let query = `SELECT * FROM tracks WHERE tracks.GenreId > ?`;

for (let i = 0; i < 12; i++) {
    db.serialize(() => { // тут будет последовательно
        db.all(query, [i], (err, arr) => {
            if (err) throw err;
            console.log(`i = ${i};\t${Date.now()-start}ms`);
        });
    }); // ждём окончания запроса к БД
} 
