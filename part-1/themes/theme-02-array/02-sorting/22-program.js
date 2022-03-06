const m = require('./08-module'); // пример подключения

let students = [
    new m.Student('Арни', 18),
    new m.Student('Слай', 17),
    new m.Student('Брюс', 20)
];

console
    .table(m.sorting(students));

students
    .forEach(student => console.log(student.toString()));
