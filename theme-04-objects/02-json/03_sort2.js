// сортировка массива объектов users по двум параметрам
// задача: 
//   сорт по полю `name` по возрастанию/убыванию + 
//   и в группах по полю `age` возрастанию/по убыванию

const _ = require('lodash'); // npm install lodash

const users = [
    { name: 'fred',   age: 48 },
    { name: 'barney', age: 34 },
    { name: 'fred',   age: 40 },
    { name: 'barney', age: 36 }
];


/**
 * по одному параметру  
 * нативный метод и lodash
 * нативный метод - мутабельный
 * lodash - не мутабельный
 */
function _sort1() {
    _
        .sortBy(users, obj => obj.name)
        .forEach(obj => console.log(obj));

    console.log(users); // проверка сохранения чистоты функций

    users
        .sort((a,b) => a.name < b.name? -1: 1)
        .forEach(obj => console.log(obj));

    console.log(users); // проверка сохранения чистоты функций
}


/**
 * lodash - по двум параметрам  
 * обычный подход
 */
function _sort2() {
    console.log(_
        .sortBy(_.sortBy(users, obj => obj.name), obj => obj.age)
    );

    console.log(_.sortBy(_.sortBy(users, ['age']), ['name']));

    console.log(_
        .sortBy(_.reverse(_.sortBy(users, obj => obj.age)), obj => obj.name)
    ); // для обратного порядка нужно повозиться

    console.log(users); // проверка сохранения чистоты функций
}


/**
 * lodash - по двум параметрам  
 * подход с параметрами сортировки  
 * и направлениями asc, desc  
 * в двух нотациях  
 */
function _sort3() {
    console.log(_.orderBy(users, ['name','age'], ['asc','desc']));
    console.log(_(users).orderBy(['name','age'], ['asc','desc']).value());
    console.log(users); // проверка сохранения чистоты функций
}


console.log('\x1Bc');

// _sort1();

// _sort2();

_sort3();
