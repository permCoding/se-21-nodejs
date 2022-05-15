// подключение внешних зависимостей
const express = require('express');

// настройка приложения
const app = express();
app.use('/css', express.static('css'));
app.set('view engine', 'ejs'); // npm i ejs

// паттерн проектирования MVC: Model-View-Controller

// model data - модель данных
let model_data = {
    // тут возможно будут ещё данные
    list_files: [], // тут будет список объектов про файлы
};

/** 
 * эта функция будет находить все файлы, формировать
 * про файлы объекты с путями, именами и размерами файлов
 * и возвращать массив этих объектов
 * 
 * @param {string} dir - директория поиска файлов
 * @returns {array} массив объектов про файлы
 */
let get_list_files = (dir) => {
    let example_obj = { // это пример оформления объекта файла
        file_path: "",
        file_name: "01.js",
        file_size: 24
    };
    return [example_obj, example_obj, example_obj]; // example
}

// controller - обработчики событий
app.get('/', function (req, res) {
    model_data.list_files = get_list_files();
    res.render('index-00', model_data); // view - представление
});

// запуск приложения
app.listen(3000, "127.0.0.1");
