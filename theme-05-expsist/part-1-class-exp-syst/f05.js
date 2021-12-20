const readln = require("readline-sync");
const es = require('./dict_chess.json');

const menu = ["Exit", "Yes", "No"]
console.log("Экспертная система - ", es.title);

post = Object.keys(es.dict)[0];
while (true) {
    console.log('Фигура =>', post); // печатаем текущее положение
    if (post.slice(-1) == '.') break;
    menu.forEach((item,i) => console.log(`[${i}] ${item}`)); // варианты ответа
    answer = readln.questionInt("Your choice ? "); // читаем ответ с консоли
    if (answer == 0) break;
    post = Object.values(es.dict[post])[answer-1];
};

console.log("The end...");
