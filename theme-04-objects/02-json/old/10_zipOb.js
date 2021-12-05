// _.zip() - как сделать массив объектов

const _ = require('lodash');

let colors = ['red','green','yellow','orange'];
let hex_names = ['#FF0000','#008000','#FFFF00','#FFA500'];

let arr_of_objs = _
    .sortBy(_
        .zip(colors, hex_names)
        .map(arr => _.zipObject(['color', 'hex_name'], arr)),
            a => a.color
    );

console.table(arr_of_objs);
console.log(arr_of_objs);
