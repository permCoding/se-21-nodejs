// узнать место в отсортированном списке

const _ = require('lodash'); // CommonJS


const objects = [
    {'x': 1},
    {'x': 2},
    {'x': 5},
    {'x': 8}
];


console.log(
    _
        .sortedIndexBy(objects, {'x': 3}, obj => obj.x)
);


console.log(
    _
        .sortedIndexBy(objects, {'x': 9}, 'x')
);

// ====================

const users = [
    { name: 'fred',   age: 48 },
    { name: 'barney', age: 34 },
    { name: 'fred',   age: 40 },
    { name: 'barney', age: 36 }
];

const user = { name: 'ilon', age: 37 }

console.log(
    _
        .sortedIndexBy(
            _.sortBy(users, obj => obj.age), user, 'age')
);
