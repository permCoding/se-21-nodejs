// npm i --save pg

const { Client } = require('pg'); 
 
 const client = new Client({ 
    user: 'xgb_pcoding', 
    host: 'postgres76.1gb.ru', 
    database: 'xgb_pcoding', 
    password: '8543b9efrty', 
    port: 5432, 
});
 
client.connect();

let query = `SELECT "TrackId", "Name", "GenreId" 
    FROM tracks WHERE tracks."GenreId" > 10`;

client.query(query, (err, res) => { 
    if (err) { 
        console.error(err); 
        return; 
    } 
    console.table(res.rows);
    // for (let row of res.rows) { console.log(row); } 
    client.end(); 
});
