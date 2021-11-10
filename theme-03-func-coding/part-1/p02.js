// немутабельные методы => немутабельные данные
// npm install lodash
// documentation: https://lodash.com/docs/4.17.15

const _ = require('lodash'); 

const ex_01 = () => { // немутабельный метод сортировки
    const arr1 = [5, 4, 3, 2, 1, 10];
    const arr2 = _.sortBy(arr1); // немутабельный
    console.log(arr1); // для контроля
    console.log(arr2); // для контроля    
}

const ex_02 = () => { // эмуляция нативной нотации js
    const arr1 = [5, 4, 3, 2, 1, 10];
    const arr2 = _(arr1)
        .sortBy()
        .value(); // немутабельный
    console.log(arr1);
    console.log(arr2);
}

const ex_03 = () => { // сортировка по выбранному полю объекта
    const users = [
        { name: "Беляков Андрей", age: 49},
        { name: "Микоян Георгий", age: 60},
        { name: "Васина Мальвина", age: 25},
        { name: "Старлинг Кларисса", age: 33},
        { name: "Пушкин Александр", age: 33}
    ];
    const arr2 = _.sortBy(users, item => item.age);
    console.log(users);
    console.log(arr2);
}

const ex_04 = () => { // сортировка в нативной нотации
    const users = [
        { name: "Беляков Андрей", age: 49},
        { name: "Микоян Георгий", age: 60},
        { name: "Васина Мальвина", age: 25},
        { name: "Старлинг Кларисса", age: 33},
        { name: "Пушкин Александр", age: 33}
    ];
    const arr2 = _(users)
        .sortBy(item => item.age)
        .value(); // приведение к типу данных массив
    console.log(users);
    console.log(arr2);
}

const ex_05 = () => { // данные из файла
    const users = require("./users.json");
    const arr2 = _.sortBy(users, item => item.age);
    console.log(users);
    console.log(arr2);
}

const ex_06 = () => { // направление сортировки
    const users = require("./users.json");
    const arr2 = _.orderBy(users, ['age'], ['desc']);
    console.log(users);
    console.log(arr2);
}

const ex_07 = () => { // сортировка по нескольким параметрам
    const users = require("./users.json");
    const arr2 = _.orderBy(users, ['age', 'name'], ['desc', 'asc']);
    console.log(users);
    console.log(arr2);
}


require("./module").cls();

// ex_01();
// ex_02();
// ex_03();
// ex_04();
// ex_05();
// ex_06();
ex_07();
