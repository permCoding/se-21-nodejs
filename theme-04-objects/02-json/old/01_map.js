// используем стандарт разметки JSDOC для документирования функций
// split map filter reduce parseInt

const _ = require('lodash');


/**
 * разбор метода _.split()  
 * нативный map - метод массива  
 * есть split, parseInt
 */
function _split() {
    let line = '12,     3, 8,9,10, 2, 1, 1, 1';
    // line.split(' ');
    let arr_lines = _.split(line, /,\s*/, 5); // re
    
    // let arr = arr_lines.map(x => parseInt(x)); // нативно так
    
    let arr = arr_lines.map(_.parseInt); // так можно в lodash

    console.log(arr_lines);
    console.log(arr);
}

/** разбор метода _.map() */
function _map() {
    let arr_lines = ['12', '3', '8', '9', '10'];
    let arr = _.map(arr_lines, _.parseInt); // map
    console.log(arr);
    
    function map1(array, func) {
        let new_arr = new Array(array.length);
        for (let i = 0; i < array.length; i++) {
            new_arr[i] = func(array[i]);
        }
        return new_arr;
    }

    function map2(array, func) {
        let new_arr = [];
        for (let item of array) {
            new_arr.push(func(item));
        }
        return new_arr;
    }    
    console.log(map1(arr_lines, parseInt));
    console.log(map2(arr_lines, _.parseInt));
}

/** разбор метода _.filter() */
function _filter() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let check_odd = x => x%2 != 0; 
    let nums_odd = _.filter(arr, check_odd);
    console.log(nums_odd);
    console.log(_.filter(arr, x => x%2)); // приведение типов
    // +'23'

    function filter(array, func) {
        let new_arr = [];
        for (let item of array) {
            if (func(item))
                new_arr.push(item);
        }
        return new_arr;
    }    
    console.log(filter(arr, x => (x%2 != 0) || (x < 3))); // наглядность != 0 лучше
}

/** разбор метода _.reduce() */
function _reduce() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let add_odd = (acc, next) => next%2 != 0? acc + next: acc;
    let acc_odd = _.reduce(arr, add_odd, 0);
    console.log(acc_odd);

    function reduce(array, func, acc) {
        let i = -1;
        if (!acc && array.length>0) {
            acc = array[++i];
        }
        while (++i < array.length) {
            acc = func(acc, array[i])
        }
        return acc;
    }    
    console.log(reduce(arr, (a, b) => b%2? a+b: a, 0)); // свой метод reduce
}


console.log('\x1Bc');

// _split();

// _map();

// _filter();

_reduce();
