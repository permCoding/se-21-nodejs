const fs = require('fs');

let dir_list = [];

const get_list = function (dir, tab=0) {
    fs.readdir(dir, function (err, items) {
        if (err) throw err;

        let shift = ' '.repeat(tab);

        items.forEach(item => {
            let path = dir + '/' + item;
            
            fs.stat(path, (err, stats) => {
                if (stats.isFile()) {
                    dir_list.push(`${shift} -> ${item} ${stats.size}`);
                }
                else {
                    dir_list.push(`${shift} => ${item}`);
                    tab += 3;
                    get_list(path, tab);
                }
            })
        });
    });
};



let dir_app = __dirname;
get_list(dir_app);
dir_list.forEach(line => console.log(line));
// так не будет работать, так как асинхронно
// список будет ещё пустым
