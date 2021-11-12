/*
На вход подаются строки:
- в первой строке n - количество последующих строк с данными
- в последующих n строках располагаются целые числа, записанные через пробел
Найти сууму чисел расположенных в столбике номер 2.

пример входного потока данных:
5
1 20 33
12 30 555 343 345534 324534
34 50 789
34 10
6 100 0 0 0 0 0
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function (line) {
    lines.push(line);
});

rl.on('close', function () {    
    let n = Number(lines[0]);
    console.log(
        lines
            .slice(1)
            .map((item) => Number(item.split(' ')[1]))
            .reduce((acc, cur) => acc + cur)
    );
});
