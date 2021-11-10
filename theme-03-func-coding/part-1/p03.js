// обработка данных в функциональном стиле
// вывести фамилии трёх лучших студентов по рейтингу

const _ = require('lodash'); 

const ex_a = () => { // поля объекта + JSON
    let obj = {
        "id": 1,
        "name": "Ilon",
        "age": 59
    };

    console.log(typeof obj);
    console.log(obj);
    console.log(JSON.stringify(obj));
    console.log(JSON.stringify(obj, ["name", "age"]));
    console.log(JSON.stringify(obj, null, 4));

    console.table(obj);
    for (let item in obj) {
        console.log(`${item} => ${obj[item]}`);
    }
    delete obj.id;
    console.log(obj);
}

const ex_b = () => { // JSON.parse
    let line = '{"id":1,"name":"Ilon","age":59}';
    let obj = JSON.parse(line);
    console.log(obj);
    console.log(JSON.stringify(obj, null, 4));
}

const ex_01 = () => { // forEach - не чистая функция - ничего не возвращает
    require("./students.json") // без хранения промежуточных результатов
        .forEach(student => console.log(student));
}

const ex_02 = () => { // map - возвращает
    return require("./students.json") // без хранения промежуточных результатов
        .map(student => JSON.stringify(student))
        .join('\n');
}

const ex_03 = () => { // решение - цепочка функций без промежуточного хранения
    return _(require("./students.json")
        .map(student => JSON.parse(
            JSON.stringify(student, ["rate", "name", "email"]
        ))))
        .orderBy(['rate'], ['desc'])
        .take(3)
        .value();
}

const ex_04 = () => { // решение - новый объект из функции
    return _(require("./students.json") // без хранения промежуточных результатов
        .map(function (student) { 
            return { 'name': student.name, 'rate': student.rate } 
        }))
        .orderBy(['rate'], ['desc'])
        .take(3)
        .value();
}

const ex_05 = () => { // решение - поля внутреннего объекта
    return _(require("./students.json") // без хранения промежуточных результатов
        .map(function (student) { 
            return { 
                'name': student.name, 
                'rate': student.rate, 
                'male': student.private.gender
            } 
        }))
        .orderBy(['rate'], ['desc'])
        .take(3)
        .value();
}

require("./module").cls();

// ex_a();
// ex_b();
// ex_01();
// console.log(ex_02());
// console.table(ex_03());
// console.table(ex_04());
console.table(ex_05());
