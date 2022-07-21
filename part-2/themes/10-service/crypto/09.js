const https = require("https");
const fs = require("fs");

const start = Date.now();
let urls = [
    "https://pcoding.ru/",
    "https://pcoding.ru/ref/170.txt",
    "https://pcoding.ru/ref/171.txt",
    "https://pcoding.ru/ref/172.txt",
    "https://pcoding.ru/ref/173.txt",
    "https://pcoding.ru/ref/174.txt",
    "https://pcoding.ru/ref/180.txt",
    "https://pcoding.ru/ref/181.txt",
    "https://pcoding.ru/ref/182.txt",
    "https://pcoding.ru/ref/183.txt",
    "https://pcoding.ru/ref/184.txt",
];

for (let iter = 0; iter < urls.length; iter++) {
    https.get(urls[iter], (res) => {
        const { statusCode } = res;
        res.setEncoding('utf8'); // устанавливаем кодировку
        let rawData = ''; // собираем данные в строку
        res.on('data', chunk => rawData += chunk);
        res.on('end', () => {
            // console.log(rawData);
            console.log(`iter = ${iter};\t${Date.now()-start}ms`); 
        }); // после получения всех данных
    });
}
