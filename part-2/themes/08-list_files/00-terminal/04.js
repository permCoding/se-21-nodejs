// Асинхронное чтение списка файлов
// и стат данных про файлы

const fs = require('fs');

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


let dir_list = [];  // сюда будем заполнять
get_list(__dirname);
dir_list.forEach(line => console.log(line));
// так не будет работать, так как асинхронно
// и список будет ещё пустым
