const { get_list } = require("./tools");


process.stdout.write('\x1Bc');

let dir_list = get_list(__dirname);

dir_list.forEach(line => console.log(line));
