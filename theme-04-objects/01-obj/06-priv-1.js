// приватное по договорённости

class Student {
    constructor(line) {
        this._name = line;
    }
    set name(line) {
        this._name = line.trim();
    }
    get name() {
        return this._name.trim();
    }
}


let stud = new Student('Петрович');
console.log(stud); // через конструктор

stud.name = ' Петро ';
console.log(stud); // через свойство

stud._name = ' Петро ';
console.log(stud); // через поле - оно public

console.log(stud.name); // через свойство

console.log(stud._name); // через поле
