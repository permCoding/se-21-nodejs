// push pop shift unshift length

arr1 = [0, 2, 4, 6, 8];
arr2 = [1, 3, 5, 7, 9];

last = arr2.pop(); // вырезать справа
arr1.push(last); // добавить справа
console.log(arr1);
console.log(arr2);

console.log("- ".repeat(9));

arr1 = [0, 2, 4, 6, 8];
arr2 = [1, 3, 5, 7, 9];

first = arr2.shift(); // вырезать слева, возвращает первый
len = arr1.unshift(first); // добавить слева, возвращает длину

console.log(arr1);
console.log(arr2);

console.log(len, arr1.length);
