// call vs apply
// call - вызвать функцию и передать в неё аргументы
// apply - вызвать функцию и передать в неё массив аргументов

const ex_01 = () => { // call без контекста
    func = (a, b) => a + b;
    console.log(func.call(null, 10, 20)); // применение без контекста
    arr = [100, 200];
    console.log(func.call(null, ...arr)); // применение без контекста
}

const ex_02 = () => { // call с контекстом
    func = function (arg) {
        for (let key in this) {
            console.log(`key = ${key}, ${key} = ${this[key]}`);
        }
        console.log(this.x, this.y, arg);
        return this.x + this.y + arg;
    }

    obj1 = { x: 1, y: 2 };
    console.log(func.call(obj1, 1000)); // применение в контексте объекта
}

const ex_03 = () => { // apply - без контекста
    func = (a, b) => a + b; // когда известно кол-во элементов массива
    console.log(func.apply(null, [10, 20])); // подавать массивом
}

const ex_04 = () => { // apply - с контекстом
    func = function (...arr) { // когда неизвестно кол-во эл-тов массива
        return this.x + this.y + arr.reduce((acc, next) => acc + next, 0);
    };

    obj1 = { x: 1, y: 2 };
    console.log(func.apply(obj1, [10, 20, 30, 40, 50])); // подавать массивом
}

const ex_05 = () => { // Math
    console.log(Math.max(1, 33, 6, 9));
    console.log(Math.max([1, 33, 6, 9])); // error
    console.log(Math.max(...[1, 33, 6, 9]));
    console.log(Math.max.apply(null, [1, 33, 6, 9])); // подавать массивом
}

// ex_01();
// ex_02();
// ex_03();
// ex_04();
ex_05();
