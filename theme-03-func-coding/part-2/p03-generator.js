// пример генератора
// это особым образом оформленная функция
// она запоминает состояние цикла - на какой итерации он остановился
// yield - аналог return`а - он возвращает значение и запоминает состояние
// при следующем обращении к функции-итератора - цикл продолжится от точки останова

function* gen1(a, b) {
	let i = a;
	while (i <= b) {
		yield i;
		i++;
	}
}

function* gen2(a, b) {
	for (let i = a; i <= b; i++) {
		yield i;
	}
}

let sequence = [...gen1(10, 15)];
console.log(sequence);

for (let item of [...gen2(10, 15)]) {
	console.log(item);
}

let generator = gen1(10, 15);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

generator = gen1(100, 105);
while (true) { // бесконечный цикл
	obj = generator.next(); // получаем следующий элемент
	if (obj['done']) break; // закончился генератор?
	console.log(obj.value);
};
