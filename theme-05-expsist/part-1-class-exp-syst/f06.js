const readln = require("readline-sync");
const es = require('./arr_chess.json');

const menu = ["Exit", "Yes", "No"]
console.log("Экспертная система - ", es.title);

let pos = 0;
while (true) {
    let post = es.arr[pos];
    console.log('Фигура =>', post); // печатаем текущее положение
    if (post.slice(-1) == '.') break;

    key = String(pos);
    answers = es.dict[key];

    menu.forEach((item,i) => console.log(`[${i}] ${item}`)); // варианты ответа
    answer = readln.questionInt("Your choice ? "); // читаем ответ с консоли
    if (answer == 0) break;
    pos = answers[answer-1];
};

console.log("The end...");
