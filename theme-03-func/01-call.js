// call vs apply

// call - вызвать функцию и передать в неё аргументы

let res, func1, func2, func3, obj1;

func1 = (a, b) => a + b;

res = func1.call(null, 10, 20);

console.log(res);

console.log('= = = = = = = = = = = = = ');

obj1 = {
    x: 1,
    y: 2
};

func2 = function (arg) {
    for (let key in this) {
        console.log(`key = ${key}, ${key} = ${this[key]}`);
    }
    console.log(this.x, this.y, arg);
    return this.x + this.y + arg;
}

res = func2.call(obj1, 100, 200);

console.log(res);

console.log('= = = = = = = = = = = = = ');

// apply - вызвать функцию и передать в неё массив аргументов

res = func1.apply(null, [10, 20]);

console.log(res);

console.log('= = = = = = = = = = = = = ');

func3 = function (...arr) {
    return this.x + this.y + arr.reduce((acc, next) => acc + next, 0);
};

res = func3.apply(obj1, [10, 20, 30, 40, 50]);

console.log(res);

console.log('= = = = = = = = = = = = = ');

console.log(Math.max(1, 33, 6, 9));
console.log(Math.max([1, 33, 6, 9]));
console.log(Math.max.apply(null, [1, 33, 6, 9]));



