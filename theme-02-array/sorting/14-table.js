const languages = [
    {id: 1, 'name lang': 'JavaScript', rating: 4.44},
    {id: 2, 'name lang': 'C#', rating: 11.6},
    {id: 3, 'name lang': 'Python', rating: 7.56},
    {id: 4, 'name lang': 'Java', rating: 9.01},
    {id: 5, 'name lang': 'PHP', rating: 8.52}
]; // это массив объектов

console.log(languages);

console.table(languages);

languages // если имя поля с пробелом
    .sort((a, b) => b['name lang'] - a['name lang'])
    .forEach(x => console.log(x['name lang'])); 

languages // если имя поля без пробела
    .sort((a, b) => b.rating - a.rating)
    .forEach(x => console.log(x.rating)); 

console.table(languages.sort((a, b) => b.rating - a.rating));
