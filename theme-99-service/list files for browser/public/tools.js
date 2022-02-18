const { readdirSync, statSync } = require('fs');
const path = require('path');


module.exports.get_list_files = function (dir) {

    let list_file_info = [];
    let dirs = [dir];
    let last;
    let status;

    while (dirs.length > 0) {
        last = dirs.pop();
        readdirSync(last, 'utf8').forEach(item => {
            status = statSync(path.join(last, item));
            if (status.isFile()) {
                let file_obj = {
                    file_path: last,
                    file_name: item,
                    file_size: status.size
                };
                list_file_info.push(file_obj);
            } else {
                dirs.unshift(path.join(last, item));
            }
        });
    }

    return list_file_info;
};

module.exports.get_list_pdf = function (dir) {

    let list_file_info = [];
    let dirs = [dir];
    let last;
    let status;

    while (dirs.length > 0) {
        last = dirs.pop();
        readdirSync(last, 'utf8')
            .filter(item => path.parse(item).ext === ".pdf")
            .forEach(item => {
            status = statSync(path.join(last, item));
            if (status.isFile()) {
                let file_obj = {
                    file_path: last,
                    file_name: item,
                    file_size: status.size
                };
                list_file_info.push(file_obj);
            } else {
                dirs.unshift(path.join(last, item));
            }
        });
    }

    return list_file_info;
};
