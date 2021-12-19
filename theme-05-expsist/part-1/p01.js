const menu = require('./db_chess.json');

console.log("Экспертная система - ", menu.title);
console.log(menu.array_dialog);

menu.array_dialog
    .forEach((line, index)=>console.log(index + '\t' + line));


let i = 0;
console.log(menu.array_dialog[i]);
console.log(menu.array_dialog[i*2+1]);
console.log(menu.array_dialog[i*2+2]);

i = 2;
console.log(menu.array_dialog[i]);
console.log(menu.array_dialog[i*2+1]);
console.log(menu.array_dialog[i*2+2]);

i = 7;
console.log(menu.array_dialog[i]);
console.log(menu.array_dialog[i*2+1]);
console.log(menu.array_dialog[i*2+2]);
