String.prototype.ChangeCase = function () {
    return [...this]
        .map(c => (c === c.toUpperCase()? 
            c.toLowerCase(): 
            c.toUpperCase()))
        .join('')
}

let line = "World мир"

console.log(line.ChangeCase())
