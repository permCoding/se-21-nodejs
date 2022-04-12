const fs = require("fs")

let lines = fs.readFileSync("./lines.txt", "utf8")

// let ptn = /\.com\b/g
// let ptn = /[^b]at/g
// let ptn = /\d{3}.\d{2}.\d{2}.\d{3}/g
let ptn = /\(?\d{3}\)?.?\d{2}.\d{2}.\d{3}/g

let arr = lines.match(ptn)

console.log(arr)
//
// console.log(ptn.toString())
//
// arr.forEach((item, i) => console.log(i, item))
