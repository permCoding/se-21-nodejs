// id, rating, name
let objects = [
    {id: 0, 'rating st': 2.4, name: 'Aaa'},
    {id: 1, 'rating st': 3.3, name: 'Zzz'},
    {id: 2, 'rating st': 1.9, name: 'Mmm'},
    {id: 3, 'rating st': 2.0, name: 'Bbb'}
];

console.log(`name = ${objects[0].name}`);

console.log(
    objects.sort((a,b) => b.id - a.id)
);

console.log('- '.repeat(9));

objects
    .sort((a,b) => a['rating st'] - b['rating st']) // если поле с пробелом
    .forEach(obj => console.log(obj));
