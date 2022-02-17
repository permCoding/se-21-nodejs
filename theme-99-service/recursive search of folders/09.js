// версия через очередь

// let files_info = require("./tools").get_list_queue("."); // current dir
let files_info = require("./tools").get_list_queue(__dirname); // current dir

// files_info.sort((a, b) => a.file_path < b.file_path? -1: +1);
files_info.sort((a, b) => b.file_size - a.file_size);

console.table(files_info.slice(0, 10));

console.log(require("path").basename(__filename));
// console.log(require("path").parse(__filename).name);
// console.log(require("path").parse(__filename).ext);
// console.log(require("path").parse(__filename).dir);


// Реализация Стека и Очереди в JS:
// https://code.tutsplus.com/ru/articles/data-structures-with-javascript-stack-and-queue--cms-23348
