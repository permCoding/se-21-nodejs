let line = 'qwerty';
console.log(line);
process.stdout.write(line);
process.stdout.write('; ' + line + '\n');

/*
console.log = function(line) {
    process.stdout.write(line + '\n');
};
*/