
process.stdout.write('\x1Bc'); // очистка консоли

console.log("."); // версия с относительными путями
console.log(__dirname); // версия с абсолютными путями

console.log();

console.log(__filename); // файл запущенной программы
console.log(require("path").parse(__filename).dir); // путь
console.log(require("path").basename(__filename)); // имя файла и расш запущенной программы
console.log(require("path").parse(__filename).name); // имя без расширения
console.log(require("path").parse(__filename).ext); // только расширение
