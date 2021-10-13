// ввод данных в консоли

function get_line() {
    process.stdout.write("Введите целое число - ");
    return require('readline-sync').question();
}

answer = Number(get_line());
console.log(`это число - ${answer%2? "нечётное": "чётное"}`);

let results = [
    "чётное", 
    "нечётное"
];
console.log(`это число - ${results[answer%2]}`);