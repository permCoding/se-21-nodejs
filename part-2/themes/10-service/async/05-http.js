const https = require("https");

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
    "https://pcoding.ru/ref/193.txt"
];

for (let i = 0; i < urls.length; i++) {
    https.get(urls[i], (res) => {
        const { statusCode } = res;
        res.setEncoding('utf8'); // устанавливаем кодировку
        let rawData = ''; // строка для сбора кусочков данных
        res.on('data', chunk => rawData += chunk); // собираем данные
        res.on('end', () => {
            // console.log(rawData);
            console.log(`i = ${i};\t${Date.now()-start}ms\t${urls[i]}`); 
        }); // после получения всех данных
    });
} // тут тоже будет запускать все потоки асинхронно без деления на 4
