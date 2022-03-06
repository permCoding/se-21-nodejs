const fs = require('fs');


const get_list = function (dir) {

    let dir_list = [];

    const _get_list = function (dir, tab = 0) {
        let items = fs.readdirSync(dir, 'utf8');

        let shift = ' '.repeat(tab);

        items.forEach(item => {
            let path = dir + '/' + item;
            let stats = fs.statSync(path);
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


let dir_list = get_list(__dirname);

dir_list.forEach(line => console.log(line));
