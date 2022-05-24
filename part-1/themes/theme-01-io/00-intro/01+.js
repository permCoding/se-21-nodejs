function ex_01() {
    var a = ["aaa", "bbb", "ccc"];
    var index;
    for (index = a.length - 1; index >= 0; --index) {
        console.log(a[index]);
    }
    console.log(index);    
}

function ex_02() {
    let a = ["aaa", "bbb", "ccc"];
    for (var index = a.length - 1; index >= 0; --index) {
        console.log(a[index]);
    }
    console.log(index); // index is defined
}

function ex_03() {
    var a = ["aaa", "bbb", "ccc"];
    for (let index = a.length - 1; index >= 0; --index) {
        console.log(a[index]);
    }
    console.log(index); // index is not defined
}

// ex_01();
ex_02();
// ex_03();
