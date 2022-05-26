const sqlite3 = require('sqlite3').verbose();

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

module.exports = {
    md_index,
    md_feed
}
