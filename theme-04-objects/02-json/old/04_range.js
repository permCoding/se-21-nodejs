// генерация диапазонов как в Python
// генерация массивов

const _ = require('lodash');

_.range(4);
// => [0, 1, 2, 3]
_.range(-4);
// => [0, -1, -2, -3]
_.range(1, 5);
// => [1, 2, 3, 4]
_.range(0, 20, 5);
// => [0, 5, 10, 15]
_.range(0, -4, -1);
// => [0, -1, -2, -3]
_.range(1, 4, 0);
// => [1, 1, 1]
_.range(0);
// => []


_.rangeRight(4);
// => [3, 2, 1, 0]
_.rangeRight(-4);
// => [-3, -2, -1, 0]
_.rangeRight(1, 5);
// => [4, 3, 2, 1]
_.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]
_.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]
_.rangeRight(1, 4, 0);
// => [1, 1, 1]
_.rangeRight(0);
// => []



console.log('генерация массивов');

let arr, count = 3;

arr = _.range(0, 15, 3);
console.log(arr); // => [0, 3, 6, 9, 12]

arr = _.times(count, () => 0); // выполняет callback count-раз, возвращая массив результатов
console.log(arr); // => ['', '', '']

arr = _.times(count, _.stubString);
console.log(arr); // => ['', '', '']

arr = _.times(count, _.stubFalse);
console.log(arr); // => [false, false, false]

arr = _.times(count, _.stubObject);
console.log(arr); // => [{}, {}, {}]

arr = _.times(count, _.stubArray);
console.log(arr); // => [[], [], []]]
