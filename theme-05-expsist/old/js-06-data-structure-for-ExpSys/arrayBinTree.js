var arr = [
	'Славик', 'Иван', 'Марья', 'Коля', 'Оля', 'Глеб', 'Галя', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
];

// далее идут уже сокращённые деревья
// 'Славик','Иван','Марья','Коля','A','B','Галя','G','H'

var arrBT = [
	{ name: 'Славик', men: 1, women: 2}, 
	{ name: 'Иван', men: 3, women: -1}, 
	{ name: 'Марья', men: -1, women: 6}, 
	{ name: 'Коля', men: 4, women: 5}, 
	{ name: 'A', men: -1, women: -1}, 
	{ name: 'B', men: -1, women: -1}, 
	{ name: 'Галя', men: 7, women: 8}, 
	{ name: 'G', men: -1, women: -1}, 
	{ name: 'H', men: -1, women: -1}
];

var arrBTarr = [
	{ name: 'Славик', arr: [1,2] }, 
	{ name: 'Иван', arr: [3,-1] }, 
	{ name: 'Марья', arr: [-1,6] }, 
	{ name: 'Коля', arr: [4,5] }, 
	{ name: 'A', arr: [-1,-1] }, 
	{ name: 'B', arr: [-1,-1] }, 
	{ name: 'Галя', arr: [7,8] }, 
	{ name: 'G', arr: [-1,-1] }, 
	{ name: 'H', arr: [-1,-1] }
];

var arrBTdict = new Map([
	['Славик', ['Иван','Марья']],
	['Иван', ['Коля','']], 
	['Марья', ['','Галя']], 
	['Коля', ['A','B']], 
	['A', ['','']], 
	['B', ['','']], 
	['Галя', ['G','H']], 
	['G', ['','']], 
	['H', ['','']]
]); 

var arrBTind = new Map([
	[0, [1,2]],
	[1, [3,-1]], 
	[2, [-1,6]], 
	[3, [4,5]], 
	[4, [-1,-1]], 
	[5, [-1,-1]], 
	[6, [7,8]], 
	[7, [-1,-1]], 
	[8, [-1,-1]]
]); 

var arrBTid = [
	'Славик','Иван','Марья','Коля','A','B','Галя','G','H'
];


module.exports.arr = arr;
module.exports.arrBT = arrBT;
module.exports.arrBTarr = arrBTarr;
module.exports.arrBTdict = arrBTdict;
module.exports.arrBTind = arrBTind;
module.exports.arrBTid = arrBTid;