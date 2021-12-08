// _.zip() - как сделать массив объектов

const _ = require('lodash');

let colors = ['red','green','yellow','orange'];
let hex_names = ['#FF0000','#008000','#FFFF00','#FFA500'];

function get_arr_of_objs_1() {
    return _
        .sortBy(_
            .zip(colors, hex_names)
            .map(a => { return { color: a[0], hex_name: a[1]} }),
                a => a.color
        );
}

function get_arr_of_objs_2() {
    let get_obj = function (a) {
        return { color: a[0], hex_name: a[1] };
    };
    return _
        .sortBy(_
            .zip(colors, hex_names)
            .map(get_obj),
                a => a.color
        );
}

function get_arr_of_objs_3() {
    return _
        .sortBy(_
            .zip(colors, hex_names)
            .map(arr => _.zipObject(['clr', 'hex'], arr)),
                a => a.color
        );
}

let arr_of_arr = _.zip(colors, hex_names);
console.log(arr_of_arr); // был массив массивов

// console.log(get_arr_of_objs_1()); // стал массив объектов
// console.log(get_arr_of_objs_2());
console.log(get_arr_of_objs_3());
