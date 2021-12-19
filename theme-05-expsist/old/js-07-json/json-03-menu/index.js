const fs = require('fs');

let text = fs.readFileSync('menu.json', 'utf-8');
let json = JSON.parse(text);

console.log(json.commands);
console.log(json.commands[0]);
console.log(json.commands[0].title);

json.commands
    .map(obj=>JSON.stringify(obj))
    .map(line=>console.log(line));
