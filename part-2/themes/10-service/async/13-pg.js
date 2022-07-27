const { Pool } = require('pg');

const pool = new Pool({ 
    user: 'xgb_pcoding', 
    host: 'postgres76.1gb.ru', 
    database: 'xgb_pcoding', 
    password: '8543b9efrty', 
    port: 5432,
    max: 15, // max number of clients in the pool 
});

pool.on('error', (err, client) => { 
    console.error('Error:', err); 
});

const start = Date.now();

let query_ = `SELECT "Composer" FROM tracks WHERE tracks."GenreId" > `;

for (let i = 0; i < 15; i++) {
    pool.connect() // через обещания
        .then((client) => { 
            let query = query_ + String(i);
            client.query(query) 
                // .then(res => console.table(res.rows))
                .then(res => console.log(`i = ${i};\t${Date.now()-start}ms`))
                .catch(err => console.error(err)); 
        })
        .catch(err => console.error(err)); 
}

console.log('- - - test async - - - ');
