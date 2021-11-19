

const _ = require('lodash');

const students = require('./json/student.json');


let arr1 = _.map(
    _.orderBy(
        _.filter(students, stud => stud.private.gender == 'male'),
        ['rate','private.age'],['desc','asc']),
    stud => _.zipObject(['rate','name','age'], [stud.rate,stud.name,stud.private.age])
);
console.table(arr1);


let arr2 = _(students)
    .filter(stud => stud.private.gender == 'male')
    .orderBy(['rate','private.age'],['desc','asc'])
    .map(stud => _.zipObject(['rate','name','age'], [stud.rate,stud.name,stud.private.age]))
    .value();
console.table(arr2);


let get_arr = _.flow(
    (items) => _.filter(items, stud => stud.private.gender == 'male'),
    (items) => _.orderBy(items, ['rate','private.age'],['desc','asc']),
    (items) => _.map(items, stud => ({rate: stud.rate, name: stud.name, age: stud.private.age}))
);
console.table(get_arr(students));

