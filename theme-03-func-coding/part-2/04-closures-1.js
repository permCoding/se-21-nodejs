// области видимости

var x = 0;

function func() {
    let x = 5;
    console.log(x);
}

func();
x++;
console.log(x);
