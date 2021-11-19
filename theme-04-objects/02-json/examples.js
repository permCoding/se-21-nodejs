const _ = require('lodash');


let obj_1 = {id: 1, 'name': 'AAA'};


function ex_1(obj1) {
	let obj_2 = obj_1; // так присвоится только ссылка на исходный объект

	obj_2.id = 2;
	obj_2.name = 'BBB';

	console.log(obj_1);
	console.log(obj_2);
}


function ex_2() {
	let obj_2 = {};
	for (let key in obj_1) { // все параметры по отдельности в цикле скопируем
		obj_2[key] = obj_1[key];
	}

	obj_2.id = 2;
	obj_2.name = 'BBB';

	console.log(obj_1);
	console.log(obj_2);
}

/**
 * map от lodash перебирает и все поля объекта,  
 * а не только элементы массива
 */
function ex_3() {
	let arr = _.map(obj_1, x => x); // все параметры через map скопируем в массив
	let obj_2 = {
		id: arr[0],
		name: arr[1]
	};

	obj_2.id = 2;
	obj_2.name = 'BBB';

	console.log(obj_1);
	console.log(obj_2);
}


function ex_4() {
	let obj_2 = _.clone(obj_1); // все параметры через clone скопируем

	obj_2.id = 2;
	obj_2.name = 'BBB';

	console.log(obj_1);
	console.log(obj_2);
}



let obj_A = {id: 1, 'name': 'AAA'};
let obj_B = {id: 2, 'name': 'BBB'};


function ex_5() {
	let arr_1 = [obj_A, obj_B];
	let arr_2 = arr_1; // так будет ссылка на тот же массив объектов

	console.log(arr_1);
	console.log(arr_2);

	console.log('вносим изменения');
	arr_2[1].name = 'CCC'; // будут заменены в обоих массивах

	console.log(arr_1);
	console.log(arr_2);
}

function ex_6() {
	let arr_1 = [obj_A, obj_B];
	let arr_2 = [];
	for (let item of arr_1) { // цикл по массиву объектов
		arr_2.push(_.clone(item)); // каждый объект в отдельности копируем
	}

	console.log(arr_1);
	console.log(arr_2);

	console.log('вносим изменения');
	arr_2[1].name = 'CCC'; // будет замена только в объекте 2

	console.log(arr_1);
	console.log(arr_2);
}

function ex_7() {
	let arr_1 = [obj_A, obj_B];
	let arr_2 = _.cloneDeep(arr_1); // так можно создать дубликат массива объектов

	console.log(arr_1);
	console.log(arr_2);

	console.log('вносим изменения');
	arr_2[1].name = 'CCC'; // будет замена только в объекте 2

	console.log(arr_1);
	console.log(arr_2);
}


module.exports.ex_1 = ex_1;
module.exports.ex_2 = ex_2;
module.exports.ex_3 = ex_3;
module.exports.ex_4 = ex_4;
module.exports.ex_5 = ex_5;
module.exports.ex_6 = ex_6;
module.exports.ex_7 = ex_7;
