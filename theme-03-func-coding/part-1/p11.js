/* реверс строки  
    решения в функциональном стиле
    нет переменных для хранения промежуточных результатов
    функция как объект
    цепочки функций
    немутабельность исходных данных
    функции не работают с внешними данными
    функции что-то возвращают
*/ 

const ex_01 = function (line) {
    return line
        .split('')
        .reverse()
        .join('');
}

const ex_02 = line => 
    [...line]
        .reduce((prev, next) => next + prev, "");

const ex_03 = line => 
        [...line]
            .reverse()
            .join('');


require("./module").cls();
let s = '1234567 890'; // test string
console.log(ex_01(s));
console.log(ex_02(s));
console.log(ex_03(s));

ex_01.title = "Функция реверса строки"; // добавим поле в объект функции
console.log(ex_01.title);
console.log(typeof ex_01);
console.log(ex_01.toString());

Function.prototype.to_String = function () {
    let div = "== ".repeat(9);
    return `${div}\n${this.title}:\n${this.toString()}\n${div}`;
};

console.log(ex_01.to_String());
