/** 
 * второй синтаксис lodash - возвращает не массив, а генератор
 * npm install lodash || npm i lodash
 * documentation: https://lodash.com/docs/4.17.15
 */
const _ = require('lodash');
const fs = require('fs');

/** map в lodash возвращает генератор */
function _nota_js(line) {
    let res = _(line)
        .split(' ', 7)
        .map(_.parseInt) // это генератор
    console.log(res);
    console.log(_.isArray(res));
}

/** разбор метода _.value() */
function _nota_lo(line) {
    let res = _(line)
        .split(' ')
        .map(_.parseInt) // _.toNumber || x => +x
        .take(7)
        .filter(x => x%2) // только нечётные
        .value(); // к типу данных массив
    console.log(res);
    console.log(_.isArray(res));
}

/** разбор метода _.sortBy() + forEach */
function _map() {
    let arr_lines = ['12', '8', '8.2', '8.3', '10'];
    _(arr_lines)
        .map(_.toNumber)
        .sortBy()
        .reverse()
        .forEach(print);
}

/** используем именованную функцию 
 * данные берём из файла СИНХРОННО
*/
function _reduce_sync() {
    let add_odd = (acc, next) => next%2 != 0? acc + next: acc;

    let fileContent = fs.readFileSync("./txt/data_1.txt", "utf8");
    let arr = fileContent
        .split('\n')
        .map(Number);
    console.log(_(arr).reduce(add_odd, 0)); // инициализировать начальное acc
}

/** данные берём из файла аСИНХРОННО */
function _reduce_async(func, file) {
    const print = function (error, data) {
        let arr = data
            .split('\n')
            .map(Number);
        let result = _(arr).reduce(func, 0);
        console.log(result);
    }
    fs.readFile(file, "utf8", print);
    console.log("асинхронное чтение файла");
}

/** не используем переменные для хранения промежуточных рез-ов */
function _reduce_async_(func, file) {
    fs.readFile(file, "utf8", // асинхронное чтение файла
        function (error, data) { // анонимная функция
            console.log(
                _(data.split('\n').map(Number)).reduce(func, 0)
            );
        }
    );
}

/** разбор метода _.toString() */
function _filter() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let check_odd = x => x%2 != 0;
    let res = _(arr)
        .filter(check_odd) // это генератор
        // .toString(); // приведём к строке
        .value(); // или к массиву
    console.log(res);
}

/** разбор метода _.orderBy() 
 * подключать json можно как модуль
*/
function _filter_ex() {
    let users = require('./json/users.json');
    let res = _(users)
        .filter(u => u.email.split('.').pop() === 'biz')
        .map(obj => _.zipObject(['name', 'email'], [obj.name, obj.email]))
        .orderBy(['name'], ['desc'])        
        .value();
    console.table(res);
}

console.log('\x1Bc');

let line = '3 2 8 9 10 1 4 2 12 1';
_nota_js(line);
_nota_lo(line);

// _map();

// _filter();

// _filter_ex();

// _reduce_sync();

// let sum = (acc, next) => next%2? acc + next: acc;
// let sum = (acc, next) => next%2 == 0? acc + next: acc;
// _reduce_async(sum, "./txt/data_1.txt");
