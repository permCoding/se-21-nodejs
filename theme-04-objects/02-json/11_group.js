// _.groupBy() - группировка и сортировка по признакам

const _ = require('lodash');

let names = ['Николай', 'Жора', 'Алексей', 'Алла'];

let groups = _.groupBy(names, x => x.length); // группируем в объект по длине
console.log('groups =', groups);


_.map(groups, group => group.sort((a,b)=> a<b?-1:1)); // сортируем каждую группу по имени
console.log(groups);


console.log('keys =', Object.keys(groups));

let arr = _.zip(Object.keys(groups), Object.values(groups)); // собираем массив массивов
console.log('arr =', arr);

let sorted = _(arr).orderBy([0], ['desc']); // сортируем массив массивов
sorted.forEach((x, i) => console.log(i, '->', x));


let sorted2 = _(groups) 
    .toPairs() // объект разбиваем на пары
    .orderBy([0], ['asc']); // сортируем их по признаку
    // .fromPairs()
    // .value();

sorted2.forEach((x, i) => console.log(i, '->', x));
