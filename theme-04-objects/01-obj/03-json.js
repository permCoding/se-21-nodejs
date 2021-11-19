// JSON не хранит методы
let source = {
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name: ${this.name}, age: ${this.age}`
    }
};

// перевести объект в JSON-строку, затем из строки собрать объект
let target = JSON.parse(JSON.stringify(source));

source.age += 1;

console.log(`source => ${source.toString()}`);
console.log(`target => ${target.toString()}`);
console.log('target =>', target);

for (let item in target) {
    console.log(`item: ${target[item]}`);
}
