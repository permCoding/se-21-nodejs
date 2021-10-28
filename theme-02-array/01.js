// инициализация массива, Array, spread, keys(), from

function example_00() { // печать массива
    numbers = [2, 3, 5, 10, 8]; // массив с элементами
    console.log(numbers); // печать массива
    console.log(...numbers); // печать элементов массива - spread
    console.log(numbers.toString());
    console.log(numbers.join(','));

    arr = [ , , 4];
    // arr = [ , , ];
    console.log(arr.length, arr);
    console.table(arr);
    for (i = 0; i <arr.length; i++) {
        console.log(`${i}\t${arr[i]}`);
    }
    arr = [99, -10, , ];
    console.log(arr.length, arr);
}

function example_01() { // добавить однин элемент
    let arr; // декларация переменной с локальной областью видимости
    arr = []; // инициализация пустого массива
    for (let i = 0, j = 10; i < 10; ++i, --j) {
        arr.push(i+j); // добавить один элемент
    }
    console.log(...arr);
    // console.log(i); // так нельзя - not defined
}

function example_02() { // добавить несколько элементов
    const arr = []; // инициализация пустого массива
    arr.push(1, 2, 3); // добавить несколько элементов
    arr.push(...arr); // добавить элементы из массива
    arr.push(...arr); // добавить элементы из массива
    console.log(arr);
}

function example_03() { // сложить массивы
    let arr_1 = [1, 2, 3]; // нельзя const, так как потом будем менять
    const arr_2 = [4, 5, 6];
    // arr_1 + arr_2
    arr_1 = arr_1.concat(arr_2); // создать новый массив сложением двух других
    console.log(arr_1, arr_2);
}


// example_00();
// example_01();
// example_02();
example_03();
