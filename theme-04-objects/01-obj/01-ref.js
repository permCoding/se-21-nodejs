let source = {
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name: ${this.name}, age: ${this.age}`
    }
};

let target = source;

source.age += 1;

console.log(`source => ${source.toString()}`);
console.log(`target => ${target.toString()}`);
