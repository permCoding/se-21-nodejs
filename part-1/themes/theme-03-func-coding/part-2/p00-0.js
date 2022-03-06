// функциональное программирование
// функции высшего порядка
// функция может принимать функцию в качестве аргумента

let inc = (x) => ++x;
let dec = (x) => --x;
let mult2 = (x) => x*2;

function get_rnd(min=0, max=100) {
    let rnd = Math.random() * (max - min + 1);
    return min + Math.floor(rnd);
}

function calc(func, arg) {
    return func(arg);
}

function calc_arr_(func, arg1, arg2) {
    return func(arg1, arg2);
}

function calc_arr(func, arr) {
    return func(arr[0], arr[1]);
}

function calc_args(func, ...arr) {
    return func(arr[0], arr[1]);
}

console.log(calc(inc, 100));
console.log(calc(dec, 100));
console.log(calc(mult2, 100));
console.log(' -'.repeat(9));
console.log(calc(get_rnd));
console.log(calc(get_rnd, 60));
console.log(calc_arr_(get_rnd, 4, 9));
console.log(calc_arr(get_rnd, [600, 666]));
console.log(calc_args(get_rnd, 8880, 8900));
