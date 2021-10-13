// передача параметров из консоли в программу

let arr = process.argv;
console.log(arr);

if (arr.length > 2) {
    let acc = 0;
    for (let item of arr.slice(2,)) {
        acc += Number(item);
    }
    console.log(`acc = ${acc}`)
}
// console.log(`acc = ${acc}`) // тут нельзя - за пределами области видимости
