// второй синтаксис lodash - возвращает не массив, а генератор

const _ = require('lodash');


function _split() {
    let line = '3,    2, 8,9,10, 1, 4,2, 12, 1';

    let res;

    res = _(line)
        .split(/,\s*/, 7)
        .map(_.parseInt) // это генератор
    console.log(res);
    console.log(_.isArray(res));

    res = _(line)
        .split(/,\s*/)
        .map(_.parseInt)
        .take(5)
        .value();
    console.log(res);
    console.log(_.isArray(res));

    console.log(
        _(line)
            .split(/,\s*/, 7)
            .map(_.toNumber) // x => _.toNumber(x)
            .filter(x => x%2 == 0)
            .join(', ')
    );

    let acc = _(line)
        .split(/,\s*/, 7)
        .map(_.parseInt)
        .filter(x => x%2 == 0)
        .reduce((a,b) => a+b);
    console.log(acc);
}

const print = x => process.stdout.write(`${x}\t`); // выводит без переноса

function _map() {
    let arr_lines = ['12', '8', '8.2', '8.3', '10'];
    _(arr_lines)
        .map(_.toNumber)
        .sortBy()
        .reverse()
        .forEach(print);
}


function _filter() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let check_odd = x => x%2 != 0;
    let res = _(arr)
        .filter(check_odd) // это генератор
        // .toString(); // приведём к строке
        .value(); // или к массиву
    console.log(res);
}


function _filter_ex() {
    let users = require('./json/users.json');
    let res = _(users)
        .filter(u => u.email.split('.').pop() === 'biz')
        .map(obj => _.zipObject(['name', 'email'], [obj.name, obj.email]))
        .orderBy(['name'], ['desc'])        
        .value();
    console.table(res);
}


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
