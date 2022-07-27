const { Pool } = require('pg');

const pool = new Pool({ 
    user: 'xgb_pcoding', 
    host: 'postgres76.1gb.ru', 
    database: 'xgb_pcoding', 
    password: '8543b9efrty', 
    port: 5432, 
});

pool.on('error', (err, client) => { 
    console.error('Error:', err); 
});

const start = Date.now();

let query_ = `SELECT "Composer" FROM tracks WHERE tracks."GenreId" > `;

for (let i = 0; i < 12; i++) {
    pool.connect((err, client, done) => { 
        if (err) throw err;
            let query = query_ + String(i);
            client.query(query, (err, res) => {
                done();
                if (err) throw err;
                console.log(`i=${i}; \t ${Date.now()-start}ms`);    
            });
    });
}

console.log('- - - test async - - - ');

// pool.end(() => { 
//     console.log('- - - test end async - - - ')
// }); // не запросуы все успеуют
