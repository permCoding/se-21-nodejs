const fs = require("fs");

const start = Date.now();

for (let iter = 0; iter < 12; iter++) {
    // работает асинхронно setTimeout
    setTimeout(() => {
        console.log(`iter = ${iter};\t${Date.now()-start}ms`);
    }, 2000);
}
