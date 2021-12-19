m = require('./module'); // подключаем модуль с ЭС

let objESB = new m.esb('db_chess.txt'); // создаём объект

console.log(objESB.title); // выводим заголовок

console.log('Result =', objESB.dialog()); // диалог и результат
