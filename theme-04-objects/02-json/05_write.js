const _ = require('lodash');
const fs = require('fs');



function write_1(mens) {
    fs
        .writeFileSync(
            './json/data_check.json', 
            JSON.stringify(_.orderBy(mens, ['name','age'], ['asc','desc']), null, 2)
        );
}

function write_2(mens, new_items) {
    mens.push(...new_items);
    fs
        .writeFileSync(
            './json/data_check.json', 
            JSON.stringify(_.orderBy(mens, ['name','age'], ['asc','desc']), null, 2)
        );
}

const mens = require('./json/mens.json');

// write_1(mens);

let objs = [
    { "name": "Яна", "age": 25 },
    { "name": "Яна", "age": 55 },
    { "name": "Алекс", "age": 21 }
]
write_2(mens, objs);
