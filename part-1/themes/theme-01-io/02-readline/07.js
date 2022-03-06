const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите Ваше имя - ", (name) => { 
    console.log(`Hi, ${name}!`);
    rl.close();
});
