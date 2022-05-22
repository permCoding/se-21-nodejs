const sqlite = require('sqlite-sync'); // https://www.npmjs.com/package/sqlite-sync

const md_index = { 
    title: "Отзывы о продукте", 
    heading: "Отзывы", 
    button: "Оставить новый отзыв",
    feeds: [] 
};

const md_feed = { 
    title: "Оставить отзыв", 
    heading: "Форма онлайн отзыва", 
    button: "Отправить отзыв" 
};

// из sqlite в массив json - для заполнения md_index.feeds
const get_records = (nameFile) => {
    sqlite.connect(nameFile); 
    let query = "SELECT name, feed FROM feeds ORDER BY id DESC LIMIT 50";
    let records = sqlite.run(query);
    sqlite.close();
    return records;
}

const inset_records = (nameFile, nameUser, feedUser) => {
    sqlite.connect(nameFile); 
    sqlite.insert("feeds", { name: nameUser, feed: feedUser }, (res) => {
        if (res.error) throw res.error;
    });
    sqlite.close();
}

module.exports = {
    md_index,
    md_feed,
    get_records,
    inset_records
}
