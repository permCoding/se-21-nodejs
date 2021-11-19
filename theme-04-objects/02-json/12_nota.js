// две нотации

const _ = require('lodash');

const users = [
    { name: 'fred',   age: 48 },
    { name: 'barney', age: 34 },
    { name: 'fred',   age: 40 },
    { name: 'barney', age: 36 }
];

let arr = _.cloneDeep(users);

arr = _.sortBy(arr, obj => obj.name);
console.log(arr);

arr = _.orderBy(arr, ['name'], ['desc']);
console.log(arr);

arr = _(arr).orderBy(['name'], ['desc']);
console.log(arr); // возвращает объект генератор

arr = _(arr)
    .filter(x => x.age <= 40)
    .orderBy(['name'], ['desc'])
    .forEach(x => console.log(x));

let result= _(arr)
    .filter(x => x.age <= 40)
    .orderBy(['name'], ['desc'])
    .map(x => JSON.stringify(x))
    .join('\n');
console.log(result);

let obj = _(arr)
    .filter(x => x.age <= 40)
    .orderBy(['name'], ['desc']);
arr = _.toArray(obj);
console.log(arr);
