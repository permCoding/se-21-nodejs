let arrGroups =
	[
		{
			"id": 1,
			"nameGr": "ПИб-1",
			"idCur": 3
		},
		{
			"id": 2,
			"nameGr": "ПИнб-2",
			"idCur": 4
		},
		{
			"id": 3,
			"nameGr": "ПИнб-3",
			"idCur": 3
		}
	];

const fs = require('fs');
function getArray(nameFile) {
	return fs
		.readFileSync(nameFile, 'utf-8')
		.split(/\r?\n/)
		.map(line => JSON.parse(line));
}
let arrStudents = getArray('students.json');

let arrCurators = eval('(' + fs.readFileSync('curators.js','utf-8') + ')');

arrGroups
	.map(obj => console.log(obj.id + '\t' + obj.nameGr));
arrStudents
	.map(obj => console.log(obj.age + '\t' + obj.nameSt + '\t' + obj.idGroup));
arrCurators
	.map(obj => console.log(obj.id + '\t' + obj.nameCur));



// ЗАПРОСЫ К ФЕЙМОВОЙ МОДЕЛИ ЗНАНИЙ

// SELECT ~ filter
// UPDATE
// INSERT
// DELETE

// узнать id объекта
let request0 = "ПИнб-3";
console.log(
	arrGroups.filter(gr => gr.nameGr == request0)[0].id
);

// запрос 1 - выбрать всех совершеннолетних
let request1 = 18; 
arrStudents
	.filter(stud => stud.age >= request1)
	.map(stud => console.log(stud.nameSt));

// запрос 2 - выбрать фамилии студентов из группы
let request2 = "ПИнб-3"; 
function checkGroup(st, find) { // найти id группы по её названию
	idGr = arrGroups.filter(gr => gr.nameGr == find)[0].id;
	return st.idGroup == idGr;
}
arrStudents
	.filter(stud => checkGroup(stud, request2))
	.map(stud => console.log(stud.nameSt));

// запрос 3 - найти всех студентов по фамилии куратора
let request3 = "Ляскин"; // "Ухова"; // 
// самостоятельно

// запрос 4 - найти куратора по фамилии студента
let request4 = "Ушкина";
// самостоятельно

// UPDATE
// запрос 5 - сменить куратора: 
// заменить поле группы "idCur" на новый id
let request5 = ["ПИнб-3","Дуров"];
arrGroups
	.filter(gr=>gr.nameGr==request5[0])[0].idCur = 
	arrCurators
		.filter(cur=>cur.nameCur==request5[1])[0].id;

