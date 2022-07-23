const fs = require("fs");

const start = Date.now();

for (let iter = 0; iter < 12; iter++) {
    // работает асинхронно setTimeout
    // все запускаются почти одновременно - не делится по 4
    // так как Nodejs не видит тут что ему нужно вычислять
    setTimeout(() => {
        console.log(`iter = ${iter};\t${Date.now()-start}ms`);
    }, 2000);
}
