// подключение внешних зависимостей
const express = require('express');

// настройка приложения
const app = express();
app.use('/css', express.static('css'));
app.set('view engine', 'ejs'); // npm i ejs

// паттерн проектирования MVC

// model data - модель данных
let model_data = {
    // тут возможно будут ещё данные
    list_files: [], // тут будет список объектов про файлы
};

/* эта функция будет получать список файлов с путями к ним и их размерами */
let get_data = () => {
    let example_obj_file = { // это пример оформления объекта файла
        file_path: "",
        file_name: "01.js",
        file_size: 24
    };
    return [example_obj_file, example_obj_file, example_obj_file];
}

// controller - обработчики событий
app.get('/', function (req, res) {
    model_data.list_files = get_data();
    res.render('index-00', model_data); // view - представление
});

// запуск приложения
app.listen(3000, "127.0.0.1");
