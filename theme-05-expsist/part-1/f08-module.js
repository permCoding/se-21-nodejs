class Es_binary {
    _menu = ["Exit", "Yes", "No"]; // свойство menu
    
    constructor(name_file) {
        this.readln = require("readline-sync");
        this._es = require(name_file);
        this.title = this._es.title;
        this._map = new Map();
        Object
            .entries(this._es.dict) // массив массивов
            .forEach(a => this._map.set(Number(a[0]), a[1])); // ассоциативный массив - словарь
    }
    /**
     * @param {string[]} array_menu
     */
    set menu(array_menu) {
        this._menu = array_menu;
    }

    print_menu = function () {
        this._menu.forEach((item,i) => console.log(`[${i}] ${item}`));
    }
    
    dialog = function () {
        let pos = 0;
        while (true) {
            let post = this._es.arr[pos];
            console.log('Фигура =>', post); // печатаем текущее положение
            if (post.slice(-1) == '.') break;
            this.print_menu();
            let answer = this.readln.questionInt("Your choice? "); // читаем ответ с консоли
            if (answer == 0) break;
            pos = this._map.get(pos)[answer-1];
        };
    }
}

module.exports.Esb = Es_binary; // декларируем публичное имя
