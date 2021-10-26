let sort_01 = function (arr) {
    return arr.sort(); // сортирует как строки
}

let sort_02 = function (arr) {
    return arr.sort((a,b) => a-b);
    /*
    a-b <0  a,b
    a-b =0  остаются как есть
    a-b >0  b,a
    */
}

let sort_03 = function (arr) {
    return arr.sort((a,b) => a>b? -1: 1);
}

const nums = [8, 6, 10, 22, 9, 4];
const words = ['ab', 'aa', 'zz', 'aaa', 'b'];

console.clear();

console.log(sort_01(words)); // строки сортирует корректно

console.log(sort_01(nums)); // [10, 22, 4, 6, 8, 9] 
console.log(sort_02(nums)); // [4, 6, 8, 9, 10, 22] 

console.log('- '.repeat(9));

console.log(sort_01(words).reverse()); // в обратном порядке
console.log(sort_03(words)); // в обратном порядке
