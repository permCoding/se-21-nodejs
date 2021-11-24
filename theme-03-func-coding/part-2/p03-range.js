// пример генератора
// это особым образом оформленная функция
// она запоминает состояние цикла - на какой итерации он остановился
// yield - аналог return`а - он возвращает значение и запоминает состояние
// при следующем обращении к функции-итератора - цикл продолжится от точки останова

function* range(a, b) {
	let i = a;
	while (i <= b) {
		yield i;
		i++;
	}
}

let generator = range(10, 15); // объект генератора

console.log(generator.next()); // у объекта есть метод next()
let next = generator.next();
console.log(`{ value: ${next.value}, done: ${next.done} } <===`);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); // тут генератор уже пуст
