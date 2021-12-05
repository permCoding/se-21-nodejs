/** 
 * второй синтаксис lodash - возвращает не массив, а генератор
 * npm install lodash || npm i lodash
 * documentation: https://lodash.com/docs/4.17.15
 */
const _ = require('lodash'); 

/** разбор метода _.value() */
function _split() {
    let line = '3 2 8 9 10 1 4 2 12 1';
    let res;
    res = _(line)
        .split(' ', 7)
        .map(_.parseInt) // это генератор
    console.log(res);
    console.log(_.isArray(res));

    res = _(line)
        .split(' ')
        .map(_.parseInt) // _.toNumber || x => +x
        .take(7)
        .filter(x => x%2) // только нечётные
        .value(); // к типу данных массив
    console.log(res);
    console.log(_.isArray(res));
}

/** разбор метода _.sortBy() */
function _map() {
    let arr_lines = ['12', '8', '8.2', '8.3', '10'];
    _(arr_lines)
        .map(_.toNumber)
        .sortBy()
        .reverse()
        .forEach(print);
}

/** разбор метода _.toString() */
function _filter() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let check_odd = x => x%2 != 0;
    let res = _(arr)
        .filter(check_odd) // это генератор
        // .toString(); // приведём к строке
        .value(); // или к массиву
    console.log(res);
}

/** разбор метода _.orderBy() */
function _filter_ex() {
    let users = require('./json/users.json');
    let res = _(users)
        .filter(u => u.email.split('.').pop() === 'biz')
        .map(obj => _.zipObject(['name', 'email'], [obj.name, obj.email]))
        .orderBy(['name'], ['desc'])        
        .value();
    console.table(res);
}

/** используем именованную функцию */
function _reduce() {
    let arr = [10, 2, 3, 4, 5, 6, 7, 8, 9];
    let add_odd = (acc, next) => next%2 != 0? acc + next: acc;
    console.log(_(arr).reduce(add_odd, 0)); // инициализировать начальное acc
}


console.log('\x1Bc');

// _split();

// _map();

// _filter();

// _filter_ex();

_reduce();
