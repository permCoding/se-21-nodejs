// замыкания 

let func = function () {
    let x = 0;
    return {
        inc: () => { x++; return x; },
        dec: () => { x--; return x; },
        reset: () => { x = 0; return x; }
    }
} // функция может возвращать объект из функций


let counter = func();

counter.inc();
counter.inc();
console.log(counter.inc());
console.log(counter.dec());
console.log(counter.reset());
