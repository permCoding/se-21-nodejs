// функция может принимать функцию в качестве аргумента

let inc = (x) => ++x;
let dec = (x) => --x;
let mult2 = (x) => x*2;

function calc(arg, func) {
    return func(arg);
}


console.log(calc(100, inc));
console.log(calc(100, dec));
console.log(calc(100, mult2));
