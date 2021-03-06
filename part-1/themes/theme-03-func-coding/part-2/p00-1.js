// функциональное программирование
// функции высшего порядка
// функция может возвращать функцию

// Замыкание – это функция вместе со всеми внешними переменными
// у каждой функции своя область видимости переменных - замыкание

function get_counter() {
    let count = 0;
    return function () { 
        return ++count;
    }; 
}


let counter1 = get_counter(); // создадим объект функции
let counter2 = get_counter();

// круглые скобки у идентификатора - применить функцию
// область
counter1(); // 1
counter1(); // 2
counter2(); // 1

console.log(counter1()); // 3
console.log(counter2()); // 2

let x = 0;
(function () { 
    return ++x;
})();
(function () { 
    return ++x;
})();
(() => ++x)();
let y = (function () { 
    return ++x;
});
console.log(`y = ${y()}`);