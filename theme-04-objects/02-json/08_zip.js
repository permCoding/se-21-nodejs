// _.zip() - массив массивов

const _ = require('lodash');

let colors = ['red', 'green', 'yellow', 'orange'];
let hex_names = ['#FF0000', '#008000', '#FFFF00', '#FFA500'];

let arr = _
    .zip(colors, hex_names)
    .sort((a, b) => a[0] < b[0]? -1: 1);

console.table(arr);
console.log(arr);

arr = _(colors)
        .zip(hex_names)
        .orderBy([0], ['asc'])
        .value();

console.table(arr);
console.log(arr);