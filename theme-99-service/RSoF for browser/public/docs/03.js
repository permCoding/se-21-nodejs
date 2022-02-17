const fs = require('fs');

const print_list = function (dir, tab=0) {
    fs.readdir(dir, function (err, items) {
        if (err) throw err;

        let shift = ' '.repeat(tab);

        items.forEach(item => {
            let path = dir + '/' + item;
            
            fs.stat(path, (err, stats) => {
                if (stats.isFile()) {
                    console.log(shift + '->', item, stats.size);
                }
                else {
                    console.log(shift + '=>', item);
                    tab +=3;
                    print_list(path, tab);
                }
            })
        });

    });
};


let dir_app = __dirname;
print_list(dir_app);
