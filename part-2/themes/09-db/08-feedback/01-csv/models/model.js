const fs = require('fs');
const csvjson = require('csvjson'); // npm i csvjson

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

// из csv файла в массив json - csv_to_json для заполнения md_index.feeds
const get_records = (nameFile, del='|') => {
    let textCSV = fs.readFileSync(nameFile, { encoding: 'utf8' });
    return csvjson.toObject(textCSV, { delimiter: del });
}

module.exports = {
    md_index,
    md_feed,
    get_records
}
