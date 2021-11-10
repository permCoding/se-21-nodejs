// модуль со вспомогательными функциями

const cls = () => { // clear terminal
    // Escape-последовательность символов 'Esc'+'c' for clear terminal
    // code char 27 => Esc 
    // code char 63 => c 

    // process.stdout.write('\033c'); // oct
    // process.stdout.write('\033\143'); // oct

    // console.log('\x1Bc'); // hex
    process.stdout.write('\x1B\x63'); // hex

    // let chr = String.fromCharCode(27); // dec
    // const cls = chr+'c';

    // console.log(cls); // cls + \n        
    // process.stdout.write(cls);
    // process.stdout.write(`${String.fromCharCode(27)}c`);

    // console.log('c'.charCodeAt(0));
}

module.exports = {
    cls: cls
}
