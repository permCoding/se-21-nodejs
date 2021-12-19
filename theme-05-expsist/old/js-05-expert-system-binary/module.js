// класс - экспертная система бинарная
function esb(nameFile, tab='\t', end='_') { // значения по умолчанию

	// это поля объекта
	this.tab = tab; // символ уровня погружения в дерево
	this.end = end; // символ окончания - листок дерева
	this.title = ""; // тут будет заголовок
	this.readln = require('readline-sync'); // для чтения с консоли

	// этот метод срабатывает сразу при создании объекта
	this.lines = (function () { // тут будут строки дерева решений
		lines = require('fs')
			.readFileSync(nameFile, 'utf8')
			.split('\n');
		this.title = lines[0]; // первая строка заголовок
		console.log(this.title); // выводим заголовок
		return lines.slice(1);
	}()); // <- из-за этих круглых скобок метод вызывается сразу

	this.dialog = function () { // реализация диалога
		let posLine = 0; let posTab = 0; // начальные значения отступов
		do { // пока не дойдём до листочка дерева
			console.log('-', this.lines[posLine].substring(posTab) + '?'); // задаём вопрос
			answer = Number(this.readln.question('1/2:')); // читаем ответ с консоли
			posTab++; posLine++; // делаем шаг вперёд - если ответ ДА
			if (answer>1) { // если ответ НЕТ
				do { posLine++; } // то делаем ещё шаги
				while (this.lines[posLine].lastIndexOf(this.tab) != posTab-1);
			}
		} while (this.lines[posLine].indexOf(this.end) < 0);
		return this.lines[posLine].substring(posTab+1); // возвращаем листок дерева - ответ
	};
}

module.exports.esb = esb; // декларируем публичное имя

// если вы работаете не на repl`е, а на локальном компьюторе, то
// модуль readline-sync нужно установить: npm install readline-sync
// а repl сам установит при первом запуске ...