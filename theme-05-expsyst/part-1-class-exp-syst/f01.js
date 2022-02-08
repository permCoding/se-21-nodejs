// Бинарное дерево решений
// https://drive.google.com/file/d/1qxR2HsltOp0lNU7ApmXjBX_YWZ6PRYEl/view?usp=sharing

const es = require('./family.json');

console.log("Экспертная система - ", es.title);
console.log(es.array_bin);

es.array_bin
    .forEach((line, index)=>console.log(index + '\t' + line));


let i = 0;
console.log(es.array_bin[i]);
console.log(es.array_bin[i*2+1]);
console.log(es.array_bin[i*2+2]);

i = 1;
console.log(es.array_bin[i]);
console.log(es.array_bin[i*2+1]);
console.log(es.array_bin[i*2+2]);

i = 2;
console.log(es.array_bin[i]);
console.log(es.array_bin[i*2+1]);
console.log(es.array_bin[i*2+2]);
