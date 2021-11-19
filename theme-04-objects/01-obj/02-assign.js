
function ex_01() {
    let source = {
        name: 'Alex',
        age: 22,
        toString: function () {
            return `name: ${this.name}, age: ${this.age}`
        }
    };
    
    let target = Object.assign({}, source);

    source.age += 1;
    
    console.log(`source => ${source.toString()}`);
    console.log(`target => ${target.toString()}`);

    console.log(`source => ${source}`);
    console.log(`target => ${target}`);
}


function ex_02() {
    let source = {
        name: 'Alex',
        age: 22
    };

    let obj = {id: 1};
    let target = Object.assign(obj, source);

    source.age += 1;
    
    console.log(`source => ${source}`);
    console.log(`target => ${target}`);

    for (let item in target) {
        console.log(item, target[item]);
    }

    console.log(JSON.stringify(target));
}


function ex_03() {
    let source = {
        name: 'Alex',
        age: 22
    };

    let obj = {id: 1};
    let data = {group: 'ПИб-1', curator: 'Беляков'};
    let target = Object.assign(obj, source, data);

    console.log(JSON.stringify(target));
}


// ex_01();

// ex_02();

ex_03();
