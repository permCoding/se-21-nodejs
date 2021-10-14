// вывод данных в консоль

console.log(123)
console.log('123')
console.log(12.3)

arr = [1, 2, 3]
console.log(arr)
console.table(arr)

obj = {
    name: 'Ilon Mask',
    age: 50
}
console.log(obj)
console.table(obj)
console.log(Object.keys(obj))

for (key of Object.keys(obj)) {
    console.log(`key = ${key}, value = ${obj[key]}`);
}
