// CommonJS module

var linq = "Language Integrated Query";

function ex_01(line) {
    console.log(
        line
            .split(/\s+/)
            .map(x => +x)
            .filter(x => x%2)
            .reduce((a,c)=>a*c)
    );    
}

function ex_02(line) {
    s = "";
    ss = [];
    for (let i=0; i < line.length; i++) {
        if (line[i] != " ") {
            s += line[i];
        }
        else {
            if (s != '') ss.push(s);
            s = "";
        }
        if ((i == line.length - 1) && (line[i] != " ")) {
            if (s != '') ss.push(s);
        }
    }
    console.log(ss);    
}

// module.exports.ex_01 = ex_01;
// module.exports.ex_02 = ex_02;

module.exports = {
    linq: linq,
    ex_01: ex_01,
    ex_02: ex_02
};
