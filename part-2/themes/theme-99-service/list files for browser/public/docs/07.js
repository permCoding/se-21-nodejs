const { get_list } = require("./tools");

let dir_list = get_list(__dirname);

dir_list.forEach(line => console.log(line));
