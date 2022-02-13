const { readdirSync, statSync } = require('fs');


module.exports.get_list = function (dir, url) {

    let dir_list = [];

    const _get_list = function (dir) {
        let items = readdirSync(dir, 'utf8');

        items.forEach(item => {
            let path = dir + '/' + item;
            let stats = statSync(path);
            if (stats.isFile()) {
                dir_list.push({ path: url + '/' + path, name: item });
            } else {
                _get_list(path);
            }
        });
    };

    _get_list(dir);

    return dir_list;
};
