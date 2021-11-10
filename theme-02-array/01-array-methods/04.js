// split map, filter, reduce, forEach

function ex_01() { // split
    let line = '2 3 5 10 8';
    let arr = line.split(' ');
    console.log(arr);    
}

function ex_02() { // map
    line = '2 3 5    10 8';
    console.log(line.split(' '));
    let numbers = line.split(' ').map(x => Number(x));
    console.log(numbers); // [2,3,5,0,0,0,10,8]
}

function ex_03() { // map
    line = '2 3 5    10 8';
    let numbers = line
        .split(/\s+/) // re = 1 или более пробелов
        .map(x => +x); // приводим к типу данных number
    console.log(numbers);    
}

function ex_04() { // filter
    line = '2 3 5 10 8';
    numbers = line
        .split(' ')
        .map(x => +x)
        .filter(x => x%2 == 0);
    console.log(numbers);    
}

function ex_05() { // reduce
    line = '2 3 5 10 8';
    result = line
        .split(' ')
        .map(x => +x)
        .filter(x => x%2 == 0)
        .reduce((acc, next) => acc + next, 0);
    console.log(result);
    
    console.log(line
        .split(' ')
        .map(x => +x)
        .filter(x => x%2 == 0)
        .reduce((acc, next) => acc + next) // без инициализации
    );    
}

function ex_06() { // array.forEach
    line = '2 3 5 10 8';
    line
        .split(' ')
        .forEach(x => console.log(x));
    
    arr = [];
    line
        .split(' ')
        .forEach(x => arr.push(Number(x)));
    console.log(arr);    
}


console.clear();
ex_01();
// ex_02();
// ex_03();
// ex_04();
// ex_05();
// ex_06();
