function get_rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function* generator_coord(min=0, max=100) {
	while (true) {
		yield { X: get_rnd(min, max), Y: get_rnd(min, max) };
	}
}

let get_coord = generator_coord();

while (true) {
	let coord = get_coord.next(); // получаем следующий элемент
	console.log(coord.value); // вывести очередной элемент
    process.stdout.write("For exit - 1 || For next - 0\t=> ");
    let answer = require('readline-sync').questionInt();
    if (answer) break;
};
