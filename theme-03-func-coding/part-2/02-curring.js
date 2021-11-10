// bind & curring apply

// bind - возвращает новую функцию

let obj = {x: 1, y: 2};

let func = function (z) { return this.x + this.y + z; };

let func_bind = func.bind(obj, 10);

console.log(func_bind());

console.log('= = = = = = = = = = = = = ');

// curring - частичное применение функции

let get_sum = (arg1, arg2) => arg1 + arg2;

let arg = 100;

let inc = get_sum.bind(null, arg);

let r1 = inc(200);
let r2 = inc(300);
let r3 = inc(50);

console.log(r1, r2, r3);

console.log('= = = = = = = = = = = = = ');

// toString() - возвращает текст функции

console.log(func.toString());
console.log(func_bind.toString());
console.log(get_sum.toString());
console.log(inc.toString());

