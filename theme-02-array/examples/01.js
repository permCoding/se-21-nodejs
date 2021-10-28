const m = require('./module_1'); // можно импортировать через идентификатор
const { linq, ex_02 } = require('./module_1'); // можно импортировать непосредственно
const line_linq = require('./module_1').linq; // можно поменять имя

console.clear();

m.ex_01("1 2 3 4    5");
ex_02(linq);
ex_02("1 2 3 4    5");

console.log(`linq = "${linq}"`);
console.log(`linq = "${line_linq}"`);
