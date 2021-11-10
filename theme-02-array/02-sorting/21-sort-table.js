// https://nodejs.org/api/console.html


let student1 = {name: 'Арни', age: 18};
let student2 = {name: 'Слай', age: 17};
let student3 = {name: 'Брюс', age: 20};

let students = [student1, student2, student3];

console.table(students.sort((a,b) => a.age - b.age));
