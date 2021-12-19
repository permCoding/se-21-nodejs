// function Person(name, age) {
// 	// this; // неявно
// 	this.name = name;
// 	this.age = age;
// 	// return this; // неявно
// }

class Person {
	constructor(name, age) {
		this.name = name;
		this['age'] = age;
	}
}

men1 = new Person('Oskar', 44);
men2 = new Person('Wiskas', 50);
men3 = new Person('Karlsen', 33);
arr = [men1, men2, men3];

console.log(men1.age);
console.log(men2['name']);
arr
	.filter(item => item.age < 50)
	.map(item => console.log(item['name']));
