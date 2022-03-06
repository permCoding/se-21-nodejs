// объекты можно создавать без декларации класса
// и объекты ссылочного типа данных

let source = {
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name: ${this.name}, age: ${this.age}`
    }
};

let target = source; // объекты копируются по ссылке

source.age += 1;

console.log(`source => ${source.toString()}`);
console.log(`target => ${target.toString()}`);

source.id = 2801; // поле в объект можно добавить "на лету" так
console.log(source);
console.log(target); // и оно будет доступно в "других" объектах

target["avg"] = 4.2; // поле в объект можно добавить "на лету" и так тоже
console.log(target);
console.log(source); // и оно будет доступно в "других" объектах

source.get_age = () => source.age; // можно добавить метод
console.log(`age = ${source.get_age()}`);
