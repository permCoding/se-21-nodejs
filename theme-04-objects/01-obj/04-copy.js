function copy_object(obj) {
	let obj_new = {};
	for (let key in obj) { // все параметры по отдельности в цикле скопируем
		obj_new[key] = obj[key];
	}
	return obj_new;
}

let source = {
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name -> ${this.name}, age -> ${this.age}`
    }
};

let target = copy_object(source);
 
source.age += 1;

console.log(`source => ${source.toString()}`);
console.log(`target => ${target.toString()}`);
