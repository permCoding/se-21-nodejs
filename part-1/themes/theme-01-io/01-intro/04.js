// передача параметров из консоли в программу

let arr = process.argv;
console.log(arr);

if (arr.length > 2) {
    // цикл по индексам
    for (let i = 2; i < arr.length; i++) {
        console.log(arr[i]);
    }
    // цикл по коллекции
    for (let item of arr) {
        console.log(item);
    }
}
