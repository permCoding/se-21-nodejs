const https = require("https");
const fs = require("fs");

const start = Date.now();

for (let iter = 0; iter < 3; iter++) {
    
    let req = https.get("https://pcoding.ru/", (res) => {
        const file = fs.createWriteStream(__dirname + `/files/f${iter}.html`);

        res.pipe(file);
        file.on("close", () => {
            let iter = 0;
            console.log(`iter = ${iter};\t${Date.now()-start}ms`); 
        });
    });
}
