// синхронный readline

readline = require("readline-sync");

console.log("Введите радиус");
radius = +readline.question();

console.log("Введите количество знаков после запятой");
count = +read.question();

// подключаем модуль с функцией

// способ 1
const utils = require("./module");
console.log(utils.squareCircle(radius, count));

// способ 2
const square_circle = require('./module').get_square_circle;
console.log(square_circle(radius, count));
