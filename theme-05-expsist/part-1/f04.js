const readln = require("readline-sync");
const es = require('./db_chess.json');

console.log("Экспертная система - ", es.title);

let pos = 0;
do {
    post = es.array_dialog[pos];
    console.log('=>', post); // печатаем текущее положение
    if (post.slice(-1) != '?') break;
    answer = readln.questionInt("Yes -> 1 | No -> 2 ? "); // читаем ответ с консоли
    pos = pos*2 + answer;    
} while ((answer > 0) && (pos < es.array_dialog.length));

console.log("The end...");

// ввести в терминале chcp 65001 для подключения кириллицы в question
// https://www.npmjs.com/package/readline-sync
