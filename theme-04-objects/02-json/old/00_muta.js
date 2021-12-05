// мутабельность
// js нативные методы массива
// или функции высшего порядка как в Python

let arr = [5, 4, 3, 2, 1,];

console.log(arr.reverse());
console.log(arr); // для контроля


const _ = require('lodash'); // npm install lodash
// documentation: https://lodash.com/docs/4.17.15


arr = [5, 4, 3, 2, 1,];
console.log(_.reverse(arr));
console.log(arr); // для контроля
