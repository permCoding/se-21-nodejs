// узнать место в отсортированном массиве объектов

const _ = require('lodash'); // CommonJS

const objects = [ // массив объектов
    {'x': -8}, 
    {'x': 5}, 
    {'x': 1}, 
    {'x': 2}
];

console.log(
    _
        .sortedIndexBy(objects, {'x': -8}, obj => obj.x)
);

console.log(
    _
        .sortedIndexBy(objects, {'x': 5}, 'x')
);

console.log("-".repeat(9));

const users = require('./json/persons.json');
console.log(users);

const user = { name: 'Волк', age: 25 } // этого будем искать

console.log(user, '-->', 
    _
        .sortedIndexBy(
            _.sortBy(users, obj => obj.age), user, 'age')
);
