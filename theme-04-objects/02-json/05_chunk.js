// нарезки массивов и итерации функций по массиву

const _ = require('lodash'); // npm install lodash


/**
 * способы нарезки массивов
 */
let _chunk = () => {
    arr = _.chunk(['a', 'b', 'c', 'd'], 2);
    console.log(arr); // => [['a', 'b'], ['c', 'd']]
    
    arr = _.chunk(['a', 'b', 'c', 'd'], 3);
    console.log(arr); // => [['a', 'b', 'c'], ['d']]
    
    arr = _.compact([0, 1, false, 2, '', 3]);
    console.log(arr); // => [1, 2, 3]    
}


/**
 * способы применения функций к массивам
 */
let _over = () => {
    [a, b] = [Math.max, Math.min]; // множественное присваивание
    let iter_func = _.over([a, b]); // массив функций
    let nums = [1, 2, 8, 4];
    let result = iter_func(...nums); // передадим значения
    console.log(result);  // => [8, 1]
    

    let foo = x => typeof x == 'number';
    let bar = x => x%2 != 0;
    let baz = x => x < 5;

    let _overSome = _.overSome([foo, bar, baz]);
    console.log(_overSome(3));
    
    let _overEvery = _.overEvery([foo, bar, baz]);
    console.log(_overEvery(5));
}


// _chunk();

_over();
