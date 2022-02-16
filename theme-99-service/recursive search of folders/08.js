// // версия с абсолютными путями
// require("./tools")
//     .get_list_json(__dirname)
//     .forEach(file =>
//         console.log(`${file.file_size}\t${file.file_name}`)
//     );


// версия с относительными путями
let files_info = require("./tools")
    .get_list_json("."); // current dir

files_info
    .sort((a, b) => a.file_path < b.file_path? -1: +1);

console.table(files_info);
