const readln = require("readline-sync");
const es = require('./family.json');

console.log("Экспертная система - ", es.title);
let quest = " | Найти папу(1) / маму(2) ?"

let pos = 0;

console.log('-', es.array_bin[pos] + quest); // задаём вопрос
answer = readln.questionInt('1/2:'); // читаем ответ с консоли
pos = pos*2 + answer;

console.log('-', es.array_bin[pos] + quest); // задаём вопрос
answer = Number(readln.question('1/2:')); // читаем ответ с консоли
pos = pos*2 + answer;

console.log('-', es.array_bin[pos] + quest); // задаём вопрос
answer = Number(readln.question('1/2:')); // читаем ответ с консоли
pos = pos*2 + answer;
