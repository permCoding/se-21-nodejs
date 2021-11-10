// bind & curring apply

const ex_01 = () => { // bind - возвращает новую функцию
    let obj = {x: 1, y: 2};
    var func = function (z) { return this.x + this.y + z; };
    var func_bind = func.bind(obj, 100); // применение в контексте объекта

    console.log(func_bind());
    console.log(func.toString()); // toString() - возвращает текст функции
    console.log(func_bind.toString());
}

const ex_02 = () => { // без контекста
    let get_sum = (arg1, arg2) => arg1 + arg2;
    let arg = 100;    
    let inc = get_sum.bind(null, arg); // без контекста
    
    console.log(inc(200), inc(300), inc(50));
    console.log(get_sum.toString());
    console.log(inc.toString());
}

const ex_03 = () => { // арность функции
    let get_square = (l, w) => l * w; // получить площадь
    let get_volume = (l, w, h) => l * w * h; // получить объём

    console.log(get_square(100, 50)); // см2
    console.log(get_volume(100, 50, 20)); // см3
}

const ex_04 = () => { // curring - частичное применение функции
    function get(h) {
        return (l, w) => {
            return h * l * w;
        }
    }
    let tmp = get(20);
    console.log(tmp(100, 50));
    console.log(tmp(100, 100));
    console.log(get(5)(10, 10));
}

// ex_01();
// ex_02();
// ex_03();
ex_04();
