// паттерн для решения задач на степике

// console.log('Ctrl-D for EXIT in Linux');
// console.log('Ctrl-C for EXIT in Windows');

/*
найти сумму чётных чисел
*/

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    let n = parseInt(lines[0], 10);
    let result = lines
        .slice(1, n+1)
        .map(x => +x)
        .filter(x => x%2 == 0)
        .reduce((acc, next) => acc + next, 0);
    console.log(result);
});

/*
на вход можете подать для проверки эти строки
4
600
25
66
27
*/
