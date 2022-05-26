const fs = require('fs');

// добавим данные в файл
const append_record = (nameUser, feed) => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let date_time = `${year}-${month}-${day} ${hour}:${min}`;
	feed = feed.replace(/(\r\n|\n|\r)/gm, ' ');
    let record = `${date_time}|${nameUser}|${feed}\n`;
    fs.appendFile("./private/feeds.csv", record, (err) => {
        if (err) return console.error(err);
    }
)};

module.exports = {
	append_record
}
