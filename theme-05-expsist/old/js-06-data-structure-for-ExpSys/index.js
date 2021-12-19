let a = require('./arrayBinTree'); // данные
let u = require('./utilsESB'); // логика

let lines = u.getLines('input.txt', 'utf-8');


// -00- тут массив заранее был подготовлен вручную
// console.log(u.esb_01(a.arr));
// console.log('Больше предков нет...');


// -01- тут массив будем готовить программно из структурированного файла
let arr = u.getArray(lines);
console.log(arr.join(' '));
console.log(u.esb_01(arr));
console.log('Больше предков нет...');


// -02- тут будем использовать массив объектов с ссылками
// console.log(u.esb_02(a.arrBT));
// console.log('Больше предков нет...');


// -03- тут массив объектов с массивами ссылок
// console.log(u.esb_03(a.arrBTarr));
// console.log('Больше предков нет...');


// -04- тут будем использовать словарь с ссылками
// console.log(u.esb_04(a.arrBTdict));
// console.log('Больше предков нет...');


// -05- тут будем использовать словарь с ссылками
// console.log(u.esb_05(a.arrBTind,a.arrBTid));
// console.log('Больше предков нет...');

