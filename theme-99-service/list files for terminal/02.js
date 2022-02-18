const fs = require('fs');

const print_list = function (dir) {
    fs.readdir(dir, function (err, items) {
        if (err) throw err;

        console.log('=>', dir);

        items.forEach(item => {
            let path = dir + '/' + item;
            
            fs.stat(path, (err, stats) => {
                if (stats.isFile()) {
                    console.log('->', item, stats.size);
                }
                else {
                    print_list(path);
                }
            })
        });

    });
};


let dir_app = __dirname;
print_list(dir_app);
