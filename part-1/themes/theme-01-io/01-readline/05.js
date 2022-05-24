const fs = require('fs');

let content = fs.readFileSync(__filename, 'utf-8');

console.log(content);

let lines = content
    .split(/\n|\r|\r\n/)
    .reverse()
    .join('\n');

fs.writeFileSync('damp.txt', lines);
