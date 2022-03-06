// пример генератора
// это особым образом оформленная функция
// она запоминает состояние цикла - на какой итерации он остановился
// yield - аналог return`а - он возвращает значение и запоминает состояние
// при следующем обращении к функции-итератора - цикл продолжится от точки останова

function* range(a, b) {
	for (let i = a; i <= b; i++) {
		yield i;
	}
}

let generator = range(10, 15);
console.log(generator.next());

let sequence = [...range(10, 15)];
console.log(sequence);

let arr = [];
for (let item of [...range(10, 15)]) {
	arr.push(item);
}
console.log(arr);
