
function ex_01() {
    function replacer(key, value) {
        // Filtering out properties
        if (typeof value === 'string') {
            return undefined;
        }
        return value;
      }
      
    var foo = {
        foundation: 'Mozilla', 
        model: 'box', 
        week: 45, 
        transport: 'car', 
        month: 7
    };
    
    console.log(JSON.stringify(foo, replacer)); // '{"week":45,"month":7}'
}

function ex_02() {
    const replacer = ['week', 'month'];
      
    var foo = {
        foundation: 'Mozilla', 
        model: 'box', 
        week: 45, 
        transport: 'car', 
        month: 7
    };
    
    console.log(JSON.stringify(foo, replacer)); // '{"week":45,"month":7}'    
}

function ex_03() {
    const replacer = null;
      
    var foo = {
        foundation: "Mozilla", 
        model: "box", 
        week: 45, 
        transport: "car", 
        month: 7
    };
    foo.transport = {
        type: foo.transport,
        color: "red",
        style: "new age"
    };
    console.log(JSON.stringify(foo, replacer, 4));
}

ex_01();
ex_02();
ex_03();
