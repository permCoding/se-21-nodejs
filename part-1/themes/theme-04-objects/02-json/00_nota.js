/** 
 * два синтаксиса lodash - возвращает генератор или массив
 * npm install lodash || npm i lodash
 * documentation: https://lodash.com/docs/4.17.15
 */
const _ = require('lodash');

/** map в lodash возвращает генератор */
function _nota_lo(line) {
    let res = _(line) // коллекцию в объект lodash
        .split(' ', 7) // взять первые 7
        .map(_.parseInt) // возвращает генератор
    console.log(res, _.isArray(res)? "массив":"генератор");
    console.log([...res]); // можно загнать в массив
    let arr = [];
    res
        .forEach(item => arr.push(item)); // или выбрать из генератора
    console.log(arr);
}

/** разбор метода _.value() */
function _nota_va(line) {
    let res = _(line)
        .split(' ')
        .map(_.parseInt) // _.toNumber || x => +x
        .take(7) // взять первые 7
        .filter(x => x%2) // только нечётные
        .value(); // к типу данных массив
    console.log(res, _.isArray(res)? "массив":"генератор");
}

/** нотация js */
function _nota_js(line) {
    let numbers = line
        .split(' ')
        .map(parseInt); // Number || x => +x
    let res = _
        .filter(numbers, x => x%2); // возвращает сразу массив
    console.log(res, _.isArray(res)? "массив":"генератор");
}

let line = '3 2 8 9 10 1 4 2 12 1';
// _nota_lo(line);
// _nota_va(line);
_nota_js(line);
