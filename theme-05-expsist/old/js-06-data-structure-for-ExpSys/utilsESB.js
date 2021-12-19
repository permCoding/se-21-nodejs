let r = require('readline-sync'); // для чтения с клавиатуры
let fs = require('fs'); // для чтения из файла
let postfix = ' - найти предка М/Ж (1/2)?';


function getLines(nameFile) { // получить массив строк из файла
	return fs
		.readFileSync('input.txt', 'utf-8')
		// .split('\n') // это для Linux, MacOS
		// .split('\r\n') // это для Windows
		.split(/\r\n|\n/)
		.slice(1);
}


function esb_01(arr) { // тут массив заранее был подготовлен вручную
	let pos = 0;
	let result = 0;

	while (pos < arr.length) {
		process.stdout.write(arr[pos] + postfix);
		result = pos;
		answer = +r.question();
		pos = pos*2 + answer;
	}

	return arr[result];
}


function getArray(lines) {
	let count_of_levels = Math.floor(Math.sqrt(lines.length+1));
	let arr = new Array();
	for (let level = 0; level < count_of_levels; level++) {
		lines
			.filter(line => line.lastIndexOf('\t') + 1 == level) // так как начало от -1
			.forEach(item => arr.push(item.substring(level))); // отрезаем tab`ы
	}
	return arr;
}


function esb_02(arr) { // тут будем использовать массив объектов с ссылками
	let pos = 0;
	let result = 0;

	while (pos>-1) {
		process.stdout.write(arr[pos].name + postfix);
		result = pos;
		let answer = +r.question();
		pos = (answer==1) ? arr[pos].men: pos = arr[pos].women;
	}

	return arr[result].name;
}


function esb_03(arr) { // тут массив объектов с массивами ссылок
	let pos = 0;
	let result = 0;

	while (pos>-1) {
		process.stdout.write(arr[pos].name + postfix);
		result = pos;
		let answer = +r.question();
		pos = arr[pos].arr[answer-1];
	}

	return arr[result].name;
}


function esb_04(arr) { // тут будем использовать словарь с ссылками
	let pos = [...arr.keys()][0];
	let result = 0;

	while (arr.has(pos)) {
		process.stdout.write(pos + postfix);
		result = pos;
		let answer = +r.question();
		pos = arr.get(pos)[answer-1];
	}

	return result;
}


function esb_05(arr, arrId) { // тут будем использовать словарь с ссылками
	let pos = 0;
	let result = 0;

	while (pos>-1) {
		process.stdout.write(arrId[pos] + postfix);
		result = pos;
		let answer = +r.question();
		pos = arr.get(pos)[answer-1];
	}

	return arrId[result];
}




module.exports.getLines = getLines;
module.exports.getArray = getArray;
module.exports.esb_01 = esb_01;
module.exports.esb_02 = esb_02;
module.exports.esb_03 = esb_03;
module.exports.esb_04 = esb_04;
module.exports.esb_05 = esb_05;