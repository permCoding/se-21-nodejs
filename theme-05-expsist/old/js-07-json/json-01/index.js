const fs = require('fs');

let text = fs.readFileSync('students.txt', 'utf-8');
let lines = text.split(/\r?\n/);
lines.map(line => console.log(line));


// id	nameSt	sex	age	idGroup
class Student
{
	constructor(id,nameSt,sex,age,idGroup) {
		this.id = +id;
		this.nameSt = nameSt;
		this.sex = !!sex; // Boolean(sex)
		this.age = +age;
		this.idGroup = +idGroup;
	}
}


let arrayStudents = lines
	.slice(1)
	.map(line => line.split('\t'))
	.map(arr => new Student(arr[0], arr[1], arr[2], arr[3], arr[4]));


arrayStudents
	.map(obj => JSON.stringify(obj))
	.map(json => console.log(json));


fs.writeFileSync('arrayOfJson.js',
	arrayStudents
		.map(obj => JSON.stringify(obj))
		.join('\r\n')
);


// можно прочитать json-строки в массив объектов
// fs
// 	.readFileSync('arrayOfJson.js', 'utf-8')
// 	.split(/\r?\n/)
// 	.map(line => JSON.parse(line))
// 	.sort((a,b)=>a.age-b.age)
// 	.map(obj=>console.log(obj.age + '\t' + obj.nameSt));

