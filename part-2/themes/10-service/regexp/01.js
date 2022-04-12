const fs = require("fs")

let lines = fs.readFileSync("./lines.txt", "utf8")

// console.log(lines)

let ptn = '[0-9]'

let re = new RegExp(ptn, 'mg')

let arr = Array.from(lines.matchAll(re))

console.log(arr)
//
// console.log(ptn.toString())
//
// arr.forEach((item, i) => console.log(i, item))
