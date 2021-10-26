// инициализация массива, Array, spread, keys(), from

function example_01(amount=3) { // генерация массива, параметр по умолчанию
    let arr = new Array(amount);
    console.log(arr); // empty items
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i+1;
    }
    console.log('arr =', arr);
    console.table(arr);
}

function example_02(amount=3) { // заполнение массива
    console.log(
        Array(amount)
        .fill(0)
    );

    console.log(
        Array(amount)
        .fill(0)
        .map((_, index) => ++index) // отображение массива
    );
}

function example_03(amount=3) { // заполнение массива, from
    console.log(
        [...Array(amount).keys()] // оператор spread ...
    );

    console.log(
        [...Array(amount).keys()].map(i => Math.pow(++i, 2))
    );
}

function example_04() { // статический метод from
    arr = Array.from('JavaScript');
    console.log(...arr);
    let line = arr.reverse().join(' ');
    console.log(line);

    arr = Array.from([0,1,2,3,4], x => x**3);
    console.log(arr);
}

function example_05() { // применение spread
    console.clear();
    let arr1 = [1, 2, 3];
    let arr2 = [0, arr1, 4, 5]; // вставить массив как элемент
    let arr3 = [0, ...arr1, 4, 5]; // вставить элементы массива, spread
    console.log(`${arr2}\n${arr3}`); // интерполяция строк прячет структуру
    console.log('arr2 =', arr2);
    console.log('arr3 =', arr3);
    console.log("-".repeat(9));
    for (let item of arr2) {
        console.log(typeof item, '\t', item);
    }
    console.log("-".repeat(9));
    arr2.forEach(item => {
        console.log(typeof item, '\t', item);
    });
}


// example_01();
// example_01(5);
// example_02(5);
// example_03(5);
// example_04();
example_05();
