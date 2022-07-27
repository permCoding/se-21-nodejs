const { Client } = require('pg'); 
 
 const client = new Client({ 
    user: 'xgb_pcoding', 
    host: 'postgres76.1gb.ru', 
    database: 'xgb_pcoding', 
    password: '8543b9efrty', 
    port: 5432, 
});

const start = Date.now();

let query_ = `SELECT "Composer" FROM tracks WHERE tracks."GenreId" > `;

client.connect();

for (let i = 0; i < 12; i++) {
    let query = query_ + String(i);
    client.query(query, (err, res) => { 
        if (err) throw err;
        console.table(`i=${i}; \t ${Date.now()-start}ms`);    
    });
}

console.log('- - - test async - - - ');
    
// client.end(); // так не будет работать 
