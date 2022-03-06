function dec_to_bin(dec) {
    bin = "";
    base = 2;
    while (dec > 0) {
        bin = dec % base + bin;
        dec = Math.floor(dec / base); 
    }
    return bin;
}

function comma_to_bin() {
    // 
}

function float_to_bin(float) {
    // 
    return dec_to_bin(4) + '.' + comma_to_bin(0.3);
}


readline = require("readline-sync");
float = Number(readline.question());
console.log(float_to_bin(float));
