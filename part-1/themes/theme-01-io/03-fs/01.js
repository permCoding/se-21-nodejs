const fs = require("fs")
const path = require("path")

console.log(__filename)
let file_name = path.basename(__filename)
let file_ext = path.extname(__filename)
let dir_name = path.dirname(__filename)

console.log(dir_name)
console.log(file_name, file_ext)