// версия через очередь

process.stdout.write('\x1Bc');

let path = "."; // версия с относительными путями
// let path = __dirname; // версия с абсолютными путями

let files_info = require("./tools").get_list_queue(path); // current dir

files_info.sort((a, b) => a.file_path < b.file_path? -1: +1); // группируем по папкам
// files_info.sort((a, b) => b.file_size - a.file_size);

// console.table(files_info.slice(-15, -1));
console.table(files_info);

// Реализация Стека и Очереди в JS:
// https://code.tutsplus.com/ru/articles/data-structures-with-javascript-stack-and-queue--cms-23348
