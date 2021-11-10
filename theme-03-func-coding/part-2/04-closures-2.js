// замыкания 

let func = function () {
    let x = 0;
    return () => { x++; return x; }
}

x = 222;

let counter1 = func();
let counter2 = func();

let res1, res2;

counter1();
res1 = counter1();

counter2();
counter2();
res2 = counter2();

console.log(`res1 = ${res1}; res2 = ${res2}`);
