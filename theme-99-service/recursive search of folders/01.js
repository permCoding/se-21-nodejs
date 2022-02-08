const fs = require('fs');

let dir_app = __dirname;

fs.readdir(dir_app, function (err, items) {
    // console.table(items);
 
    console.log('=>', dir_app);
    items.forEach(item => {
        let path = dir_app + '/' + item;
        
        fs.stat(path, (err, stats) => {
            if (stats.isFile()) {
                console.log('->', item, stats.size);
            }
            else {
                console.log('=>', item);
            }
        })
    });

});