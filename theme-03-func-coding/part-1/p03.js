// обработка данных в функциональном стиле
// вывести фамилии трёх лучших студентов по рейтингу

const _ = require('lodash'); 

const ex_01 = () => { // forEach - не чистая функция
    require("./students.json") // без хранения промежуточных результатов
        .forEach(student => console.log(student));
} // не числая функция - ничего не возвращает

const ex_02 = () => { // return
    return require("./students.json") // без хранения промежуточных результатов
        .map(student => JSON.stringify(student))
        .join('\n');
}

const ex_03 = () => { // решение
    return _(require("./students.json") // без хранения промежуточных результатов
        .map(function (student) { 
            return { 'name': student.name, 'rate': student.rate } 
        }))
        .orderBy(['rate'], ['desc'])
        .take(3)
        .value();
}

// ex_01();
// console.log(ex_02());
console.table(ex_03());
