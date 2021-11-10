function ex_01() { // mutable
    const unsorted = [2,3,1,4];

    const sorted = unsorted.sort((a,b) => a - b);
    
    console.log(unsorted);
    console.log(sorted);
}

function ex_02() { // immutable
    const unsorted = [2,3,1,4];

    const sorted = [...unsorted].sort((a,b) => a - b);
    
    console.log(unsorted);
    console.log(sorted);
}

ex_01();
ex_02();
