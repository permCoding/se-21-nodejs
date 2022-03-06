// _.zip() - массив массивов

const _ = require('lodash');

let colors = ['red', 'green', 'yellow', 'orange', 'black', 'white'];
let hex_names = ['#FF0000', '#008000', '#FFFF00', '#FFA500'];

function _sort() {
    let arr = _
        .zip(colors, hex_names)
        .sort((a, b) => a[0] < b[0]? -1: 1);

    console.table(arr);
    console.log(arr);
}

function _order() {
    let arr = _(colors)
        .zip(hex_names)
        .orderBy([0], ['asc'])
        .value();

    console.table(arr);
    console.log(arr);
}

function _order_2() {
    let arr = _(colors)
        .zip(hex_names)
        .orderBy([1, 0], ['desc','asc'])
        .value();

    console.table(arr);
    console.log(arr);
}

function _order_3() {
    let arr = _(colors)
        .zip(hex_names)
        .filter(x => typeof x[1] != "undefined")
        .map(x => [x[1], x[0]])
        .orderBy([0], ['asc'])
        .value();

    console.table(arr);
    console.log(arr);
}

function _order_4() {
    let arr = _(colors)
        .zip(hex_names)
        .filter(x => !!x[1])
        .value();

    console.table(arr);
    console.log(arr);
}

function not_not() {
    let x, y = 222;
    console.log(x, y);
    console.log(!x, !y);
    console.log(!!x, !!y);    
}

// _sort();
// _order();
// _order_2();
// _order_3();
// _order_4();
not_not();
