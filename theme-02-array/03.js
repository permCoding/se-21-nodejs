// split map, filter, reduce, forEach

function ex_map() { // map
    lines = ['1', '2', '3'];
    numbers = lines.map(item => Number(item)); // анонимная функция
    console.log(numbers);

    let get_num = function(line) {
        return Number(line);
    }
    console.log(lines.map(get_num)); // именованная функция
}

function ex_filter() { // filter
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers.filter(x => x%2)); // отфильтровать нечётные
}

function ex_reduce() { // reduce - свёртка
    numbers = [1, 2, 3];
    console.log(numbers.reduce((acc, cur) => acc + cur));
    numbers = [-100, 2, 3];
    console.log(numbers.reduce((acc, cur) => acc - cur));
    numbers = [-100, 2, 3];
    console.log(numbers.reduce((acc, cur) => acc - cur, 0));
}

console.clear();
ex_map();
ex_filter();
ex_reduce();
