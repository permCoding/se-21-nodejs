const readln = require("readline-sync");
const es = require('./family.json');

const menu = ["выход", "папа", "мама"]
console.log("Экспертная система - ", es.title);

let pos = 0;
do {
    console.log('=>', es.array_bin[pos]); // печатаем текущее положение
    menu.forEach((item, i) => console.log(`\t[${i}] ${item}`)); // варианты ответа
    answer = readln.questionInt("\t0|1|2 ? "); // читаем ответ с консоли
    pos = pos*2 + answer;    
} while ((answer > 0) && (pos < es.array_bin.length));

console.log("The end...");

// ввести в терминале chcp 65001 для подключения кириллицы в question
// https://www.npmjs.com/package/readline-sync
