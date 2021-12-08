// узнать место в отсортированном массиве объектов

const _ = require('lodash'); // CommonJS

const objects = [ // массив объектов
    {'x': -8}, 
    {'x': 10}, 
    {'x': 20}, 
    {'x': 50}
];

// используется бинарный поиск
console.log(_.sortedIndexBy(objects, {'x': -8}, obj => obj.x));
console.log(_.sortedIndexBy(objects, {'x': -8}, 'x'));
console.log(_.sortedIndexBy(objects, {'x': 50}, obj => obj.x));
console.log(_.sortedIndexBy(objects, {'x': 10}, 'x'));

console.log("- ".repeat(9));

const users = require('./json/persons.json');

console.log(_.orderBy(users, x=>x.age));
const user1 = { name: 'Артемон', age: 22 }; // этого будем искать
console.log(user1, '-->', _.sortedIndexBy(_.orderBy(users, x=>x.age), user1, 'age'));

console.log("- ".repeat(9));

console.log(_.orderBy(users, x=>x.name));
const user2 = { name: 'Яков', age: 12 }; // этого будем искать
console.log(user2, '-->', _.sortedIndexBy(_.orderBy(users, x=>x.name), user2, 'name'));
