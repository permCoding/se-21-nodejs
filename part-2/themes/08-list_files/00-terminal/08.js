/**
 * версия с абсолютными путями
 */
let print_files_1 = function () {
    require("./tools")
        .get_list_json(__dirname)
        .forEach(file =>
            console.log(`${file.file_size}\t${file.file_name}`)
        );
}


/**
 * версия с относительными путями
 */
let print_files_2 = function () {
    let files_info = require("./tools")
        .get_list_json("."); // current dir

    files_info
        .sort((a, b) => a.file_path < b.file_path? -1: +1);

    console.table(files_info);
}


process.stdout.write('\x1Bc');
// print_files_1();
print_files_2();
