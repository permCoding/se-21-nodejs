class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
    toString() {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

function get_array_sorting(array) {
	return array.sort((a,b) => a.age - b.age);
}


module.exports.sorting = get_array_sorting;
module.exports.Student = Student;