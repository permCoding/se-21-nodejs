// из объекта в массив

const { isNumber } = require('lodash');
const _ = require('lodash');


let colors = {
    "red": 4, 
    "green": 2, 
    "blue": 1,
    "black": 0
};
_
    .toPairs(colors)
    .forEach(x => console.log(x)); // объект на пары
console.log(_.toPairs(colors)); // массив пар



let pairs = [
    ['id', 60156],
    ['name', 'ilon'], 
    ['city', 'Houston'], 
    ['age', 56],
    ['gender', true]
];
let person = _.fromPairs(pairs); // из массива пар в объект
console.log(JSON.stringify(person, null, 2));


console.log(
    _.map(_.toPairs(colors).slice(0,2), item => _.fromPairs([item]))
);

let men = {
    "id": 60156,
    "name": "ilon",
    "city": "Houston",
    "age": 56,
    "gender": true
};
let arr_objs = _.map(_.toPairs(men).filter(x => !isNumber(x[1])), item => _.fromPairs([item]));
console.log(JSON.stringify(arr_objs, null, 2));
