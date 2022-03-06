function dec_to_bin(dec) {
    bin = "";
    base = 2;
    while (dec > 0) {
        bin = dec % base + bin;
        dec = Math.floor(dec / base); 
    }
    return bin;
}

readline = require("readline-sync");
dec = Number(readline.question());
console.log(dec_to_bin(dec));
