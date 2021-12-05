// из объекта в массив

const _ = require('lodash');

let obj = {"red": 12, "green": 15, "blue": 2};

console.log(_.toPairs(obj)); // объект на пары

console.log(_.fromPairs([['gender', true]])); // из пары в объект

let arr = _.map(_.toPairs(obj), item => _.fromPairs([item]));

console.log(arr);

