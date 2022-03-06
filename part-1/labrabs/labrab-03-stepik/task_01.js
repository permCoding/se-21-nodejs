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
    result = lines[0]
        .split(' ')
        .map(item => Number(item))
        .filter(item => item%2 == 0)[0];
    console.log(result);
});
