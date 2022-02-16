const { readdirSync, statSync } = require('fs');
const path = require('path');


module.exports.get_list = function (dir) {

    let dir_list = [];

    const _get_list = function (dir, tab = 0) {
        let items = readdirSync(dir, 'utf8');

        let shift = ' '.repeat(tab);

        items.forEach(item => {
            let path = dir + '/' + item;
            let stats = statSync(path);
            if (stats.isFile()) {
                dir_list.push(`${shift} -> ${item} ${stats.size}`);
            } else {
                dir_list.push(`${shift} => ${item}`);
                _get_list(path, tab + 3);
            }
        });
    };

    _get_list(dir);

    return dir_list;
};

module.exports.get_list_json = function (dir) {

    let list_file_info = [];

    const _get_list = function (dir) {
        readdirSync(dir, 'utf8').forEach(item => {
            let path_item = path.join(dir, item);
            let stats = statSync(path_item);
            if (!stats.isFile()) { _get_list(path_item); return; }
            let file_obj = {
                file_path: dir,
                file_name: item,
                file_size: stats.size
            };
            list_file_info.push(file_obj);
        });
    };

    _get_list(dir);

    return list_file_info;
};
