const readln = require("readline-sync");
const es = require('./ass_arr_chess.json');

const menu = ["Exit", "Yes", "No"]
const print_menu = (m) => m
    .forEach((item,i) => console.log(`[${i}] ${item}`)); // варианты ответа
console.log("Экспертная система - ", es.title);

let map = new Map();
Object
    .entries(es.dict) // массив массивов
    .forEach(a => map.set(Number(a[0]), a[1])); // ассоциативный массив - словарь
// console.log(map);

let pos = 0;
while (true) {
    let post = es.arr[pos];
    console.log('Фигура =>', post); // печатаем текущее положение
    if (post.slice(-1) == '.') break;
    print_menu(menu);
    answer = readln.questionInt("Your choice? "); // читаем ответ с консоли
    if (answer == 0) break;
    pos = map.get(pos)[answer-1];
};

console.log("The end...");
