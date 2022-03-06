// ссылочные данные

// npm install lodash
// documentation: https://lodash.com/docs/4.17.15
const _ = require('lodash'); 


function ex_00() { // ссылка на объект массива
    const arr1 = [5, 4, 3, 2, 1, 10]; // исходное состояние массива
    const arr2 = arr1; // присваивается ссылка на объект

    console.log(arr1); // для контроля
    console.log(arr2); // для контроля    

    [arr2[0], arr2[arr2.length-1]] = [arr2[arr2.length-1], arr2[0]]; // меняем элементы arr2

    console.log(arr1); // для контроля
    console.log(arr2); // для контроля    
}

function ex_01() { // срез массива как копия
    const arr1 = [5, 4, 3, 2, 1, 10]; // исходное состояние массива
    const arr2 = arr1.slice(); // срез массива, неглубокое копирование

    console.log(arr1); // для контроля
    console.log(arr2); // для контроля    

    [arr2[0], arr2[arr2.length-1]] = [arr2[arr2.length-1], arr2[0]]; // меняем элементы arr2

    console.log(arr1); // для контроля
    console.log(arr2); // для контроля    
}

function ex_02() { // меняем объекты в массиве
    const arr1 = [
        { "id": 1, "rate": 88 },
        { "id": 2, "rate": 50 },
        { "id": 3, "rate": 90 }
    ]; // исходное состояние массива
    const arr2 = arr1.slice(); // срез массива, неглубокое копирование

    console.table(arr1); // для контроля
    console.table(arr2); // для контроля    

    [arr2[0], arr2[arr2.length-1]] = [arr2[arr2.length-1], arr2[0]]; // меняем элементы arr2

    console.table(arr1); // для контроля
    console.table(arr2); // для контроля    
}

function ex_03() { // меняем поле объекта
    const arr1 = [
        { "id": 1, "rate": 88 },
        { "id": 2, "rate": 50 },
        { "id": 3, "rate": 90 }
    ]; // исходное состояние массива
    const arr2 = arr1.slice(); // срез массива, неглубокое копирование

    console.table(arr1); // для контроля
    console.table(arr2); // для контроля    

    arr2[0].rate = 100; // меняем содержимое объекта как элемента arr2

    console.table(arr1); // для контроля
    console.table(arr2); // для контроля    
}

function ex_04() { // _.clone() неглубокое копирование
    const arr1 = [5, 4, 3, 2, 1, 10]; // исходное состояние массива
    const arr2 = _.clone(arr1); // клон массива, неглубокое копирование

    console.log(arr1); // для контроля
    console.log(arr2); // для контроля    

    arr2[0] = 100; // меняем содержимое элемента arr2

    console.log(arr1); // для контроля
    console.log(arr2); // для контроля    
}

function ex_05() { // _.clone() не работает для ссылочных типов
    const arr1 = [
        { "id": 1, "rate": 88 },
        { "id": 2, "rate": 50 },
        { "id": 3, "rate": 90 }
    ]; // исходное состояние массива
    const arr2 = _.clone(arr1); // клон массива, неглубокое копирование

    console.table(arr1); // для контроля
    console.table(arr2); // для контроля    

    arr2[0].rate = 100; // меняем содержимое объекта как элемента arr2

    console.table(arr1); // для контроля
    console.table(arr2); // для контроля    
}

function ex_06() { // _.cloneDeep() глубокое копирование
    const arr1 = [
        { "id": 1, "rate": 88 },
        { "id": 2, "rate": 50 },
        { "id": 3, "rate": 90 }
    ]; // исходное состояние массива
    const arr2 = _.cloneDeep(arr1); // клон массива, неглубокое копирование

    console.table(arr1); // для контроля
    console.table(arr2); // для контроля    

    arr2[0].rate = 100; // меняем содержимое объекта как элемента arr2

    console.table(arr1); // для контроля
    console.table(arr2); // для контроля    
}

require("./module").cls();

// ex_00();
// ex_01();
// ex_02();
// ex_03();
// ex_04();
// ex_05();
ex_06();
