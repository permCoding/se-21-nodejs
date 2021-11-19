// _.zip() - как сделать массив объектов

const _ = require('lodash');

let colors = ['red','green','yellow','orange'];
let hex_names = ['#FF0000','#008000','#FFFF00','#FFA500'];

let arr_of_arr = _.zip(colors, hex_names);
console.log(arr_of_arr);

let get_obj = function (arr) {
    return { color: a[0], hex_name: a[1] };
};

let arr_of_objs = _
    .sortBy(_
        .zip(colors, hex_names)
        // .map(get_obj),
        .map(a => { return { color: a[0], hex_name: a[1]} }),
            a => a.color
    );

console.table(arr_of_objs);
