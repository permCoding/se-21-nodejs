// подключаем модуль с функцией
const square_circle = require('./module').get_square_circle;

// асинхронный readline

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите радиус - ', (radius) => {
    radius = +radius; // делаем числом
    readline.question('Введите количество знаков после запятой - ', (count) => {
        count = +count;
        console.log(`result = ${square_circle(radius, count)}`);
        readline.close();
    });
});
