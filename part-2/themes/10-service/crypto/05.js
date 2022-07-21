const crypto = require('crypto');

const start = Date.now();

// node.js работает под капотом в 4 потока для async функций
// но преимущество не в 4 раза, а в 2 - время уходит на организацию и переключение
for (let iter = 0; iter < 12; iter++) {
    // сравним вариант асинхронный
    // crypto.pbkdf2("admin", '5', 1000000, 64, "sha512", () => {
    //     console.log(`iter = ${iter};\t${Date.now()-start}ms`)
    // });
    // и синхронный
    let hash = crypto.pbkdf2Sync("admin", '5', 1000000, 64, "sha512");
    console.log(`iter = ${iter};\t${Date.now()-start}ms`)
}

/*
пример асинхронного вывода
iter = 3;       1502ms
iter = 1;       1506ms
iter = 0;       1561ms
iter = 2;       1561ms
iter = 4;       3018ms
iter = 7;       3024ms
iter = 5;       3046ms
iter = 6;       3065ms
iter = 8;       4471ms
iter = 9;       4523ms
iter = 11;      4543ms
iter = 10;      4560ms
пример синхронного вывода
iter = 0;       734ms
iter = 1;       1476ms
iter = 2;       2226ms
iter = 3;       2960ms
iter = 4;       3696ms
iter = 5;       4435ms
iter = 6;       5171ms
iter = 7;       5913ms
iter = 8;       6649ms
iter = 9;       7389ms
iter = 10;      8160ms
iter = 11;      8945ms
*/


