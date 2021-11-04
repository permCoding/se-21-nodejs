/*
line
    .split(/\s+/)
    .map(x => +x)
    .filter(x => x%2)
    .reduce((acc, cur) => acc + cur);
*/

function f_split(line) {
    arr_s = [];
    tmp = "";
    for (i = 0; i < line.length; i++) {
        if (line[i] != " ") {
            tmp += line[i];
        }
        else {
            if (tmp != '') arr_s.push(tmp);
            tmp = ""
        }
    }
    return arr_s;
}

line = "100 200      3 5 6 999";
arr_s = f_split(line);
// arr_n = f_map(arr_s);
// arr_f = f_filter(arr_n);
// sum = f_sum(arr_f);
// console.log(sum);

console.log(arr_s);

/*
line = "100 200      3 5 6 9";
['100', '200', '', '', '', '', '', '3', '5', '6']
- лишние пустые строки
- нет последнего числа
*/
