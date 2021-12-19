const menu = require('./menu.json');

console.log(menu.commands);
console.log(menu.commands[0]);
console.log(menu.commands[0].title);

menu.commands
    .map(obj=>JSON.stringify(obj))
    .map(line=>console.log(line));

menu.commands
    .forEach(line=>console.log(line));

menu.commands
    .forEach(obj=>console.log(obj.title));

console.log("Пункт меню - ", menu.Меню);
menu.commands
    .forEach((obj, index)=>console.log(index, '\t', obj.title));
