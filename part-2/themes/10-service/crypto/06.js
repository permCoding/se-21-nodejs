const fs = require("fs");

const start = Date.now();

for (let iter = 0; iter < 12; iter++) {
    // сравним вариант асинхронный
    fs.readFile(__filename, (err, data) => {
        if (err) throw err;
        let len = data.toString().split('\n').reverse().join('\n').length;
        console.log(`iter = ${iter};\t${Date.now()-start}ms`);
    });
    // при первой итерации файл загружается с диска в кэш, при следующих - уже из кэша
}
