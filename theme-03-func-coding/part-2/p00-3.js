// замыкания 

let func = function (_x = 0) {
    let x = _x;
    return {
        inc: () => ++x,
        inc_y: y => x += y,
        add: (x, y) => x + y,
        dec: () => --x,
        mod2: () => x%2,
        get: () => x,
        reset: () => 0
    }
} // функция может возвращать объект из функций


let counter = func(100);

console.log(counter.dec());
console.log(counter.mod2());

console.log('- '.repeat(9));

cnt = func();

console.log(cnt.get());
cnt.inc_y(777);
console.log(cnt.get());
console.log(cnt.inc());
console.log(cnt.inc());
console.log(cnt.mod2());

console.log(cnt.add(100, 55));
