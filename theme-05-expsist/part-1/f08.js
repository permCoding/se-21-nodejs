const Es = require('./f08-module').Esb; // подключаем модуль с ЭС

let obj_es = new Es('./ass_arr_chess.json'); // создаём объект

obj_es.menu = ["Выход", "ДА", "НЕТ"]; // заменим пункты меню

console.log(obj_es.title); // выводим заголовок

obj_es.dialog(); // организуем диалог

console.log("The end...");
