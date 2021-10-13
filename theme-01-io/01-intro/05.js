// ввод данных в консоли

readln = require('readline-sync'); // подключаем модуль

console.log("- введите целое число");

answer = Number(readln.question()); // читаем с консоли

result = answer%2==0? "чётное": "нечётное";

console.log("это число " + result);

/*
если ошибка: Cannot find module 'readline-sync'
значит забыли установать модуль
вот так в консоли для установки: npm i readline-sync
*/