// мутабельные методы => мутабельные данные
// нативные методы массива в js

// функции высшего порядка - могут принимать и возвращать функции


function ex_01() { // реверс массива
    const arr1 = [5, 4, 3, 2, 1, 10]; // исходное состояние массива
    console.log("arr1 =", arr1); // для контроля
    const arr2 = arr1.reverse(); // мутабельный, "на месте"
    console.log("arr1 =", arr1); // для контроля
    console.log("arr2 =", arr2); // для контроля
}

function ex_02() { // сортирует, преобразуя к типу String
    const arr1 = [5, 4, 3, 2, 1, 10]; // исходное состояние массива
    const arr2 = arr1
        .sort(); // мутабельный
    console.log("arr1 =", arr1); // для контроля
    console.log("arr2 =", arr2); // для контроля    
}

function ex_03() { // анонимная функция - сравнить как числа не приводя к строкам
    const arr1 = [5, 4, 3, 2, 1, 10]; // исходное состояние массива
    const arr2 = arr1.sort((a, b) => a < b? -1: 1); // мутабельный
    console.log("arr1 =", arr1); // для контроля
    console.log("arr2 =", arr2); // для контроля
}

function ex_03_() { // анонимная функция - сравнить как числа не приводя к строкам
    const arr1 = [5, 4, 3, 2, 1, 10]; // исходное состояние массива
    const arr2 = arr1.sort((a, b) => b - a); // в обратном порядке
    console.log("arr1 =", arr1); // для контроля
    console.log("arr2 =", arr2); // для контроля
}

function ex_04() { // функция как аргумент другой функции
    function comparator(x, y) {
        return x < y? -1: 1;
    }
    const arr1 = [5, 4, 3, 2, 1, 10]; // исходное состояние массива
    const arr2 = arr1.sort(comparator); // мутабельный
    console.log("arr1 =", arr1); // для контроля
    console.log("arr2 =", arr2); // для контроля    
}

function ex_05() { // функция как объект 
    const comparator = function (x, y) {
        return x < y? -1: 1;
    }
    const arr1 = [5, 4, 3, 2, 1, 10]; // исходное состояние массива
    const arr2 = arr1.sort(comparator); // мутабельный
    console.log("arr1 =", arr1); // для контроля
    console.log("arr2 =", arr2); // для контроля    
}

function ex_06() { // функция как объект 
    const comparator = (x, y) => x < y? -1: 1;
    const arr1 = [5, 4, 3, 2, 1, 10]; // исходное состояние массива
    const arr2 = arr1.sort(comparator); // мутабельный
    console.log("arr1 =", arr1); // для контроля
    console.log("arr2 =", arr2); // для контроля    
}

function ex_07() { // функция как объект 
    const comparator = (x, y) => x < y? -1: 1;
    const cmp = comparator;
    const arr1 = [5, 4, 3, 2, 1, 10]; // исходное состояние массива
    const arr2 = arr1.sort(cmp); // мутабельный
    console.log("arr1 =", arr1); // для контроля
    console.log("arr2 =", arr2); // для контроля    
}


require("./module").cls();

// ex_01();
// ex_02();
ex_03();
ex_03_();
// ex_04();
// ex_05();
// ex_06();
// ex_07();
