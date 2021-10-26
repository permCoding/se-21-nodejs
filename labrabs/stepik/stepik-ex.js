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
    let n = +lines[0];
    console.log(lines
        .slice(1)
        .map(line => [+line.split(';')[0], +line.split(';')[1]])
        .filter(arr => arr[1] > n)
    );
});

/*
180
0;185
1;150
2;216
*/