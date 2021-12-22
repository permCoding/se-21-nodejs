const readln = require("readline-sync");

function dialog(es) {
    console.log(es.title);
    let post = Object.keys(es.dict)[0]; // стартуем с первого вопроса
    while (true) {
        console.log('\t=>', post); // печатаем текущее положение
        let menu = es.dict[post]; // узнаём варианты ответов
        if (typeof menu == 'undefined') return 'Выбор сделан.'; // если это листок дерева
        if (menu.length == 0) return 'Нет вариантов.';
        menu.unshift('Выход'); // добавим пункт меню для выхода    
        menu.forEach((item,i) => console.log(`[${i}] ${item}?`)); // печатаем варианты
        let answer = readln.questionInt("Your choice ? "); // читаем ответ с консоли
        if (answer == 0) return 'Отказ от выбора';
        post = menu[answer];
    };    
}


process.stdout.write('\x1B\x63'); // escape sequence -> clear
console.log(dialog(require('./zoo.json'))); // Ctrl+C/Ctrl+D -> для прерывания
