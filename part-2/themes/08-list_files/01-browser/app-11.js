// подключение внешних зависимостей и модулей
const express = require('express');
const path = require('path');
const {readdirSync, statSync} = require("fs");

// настройка приложения
const app = express();
app.use('/public', express.static('public'));
app.use('/css', express.static('css'));
app.set('view engine', 'ejs'); // npm i ejs
const params = {"port": 3000, "hostname": "127.0.0.1"};
const dir_files = path.join("public", "docs");

// паттерн проектирования MVC

// model data - модель данных
let model_data = {
    title: "List of files",
    heading: "Список файлов",
    list_files: [], // тут будет список объектов про файлы
};

/* эта функция будет получать список файлов 
 * из папки dir включая все вложенные папки
 * с путями к ним и размерами файлов
 */
const get_list_files = (dir) => {
    let list_files = [];
    let dirs = [dir]; // список директорий для поиска файлов
    let last; // крайняя директория из списка
    let status; // данные о файле
    while (dirs.length > 0) { // пока очередь директорий не пуста
        last = dirs.pop(); // берём крайнюю директорию
        readdirSync(last, 'utf8').forEach(item => { // для каждого элемента директории
            status = statSync(path.join(last, item)); // получим данные
            if (status.isFile()) { // если это файл
                let file_obj = { // формируем объект файла
                    file_path: last, // путь к файлу
                    file_name: item,
                    file_size: status.size
                };
                list_files.push(file_obj); // добавляем в список
            } else { // если это не файл, а директория
                dirs.unshift(path.join(last, item)); // добавим новую директорию
            }
        });
    }
    return list_files;
};

// controller - обработчики событий - запрос-ответ
app.get(['/'], function (req, res) {
    model_data.list_files = get_list_files(dir_files);
    res.render('index-01', model_data);
});

// запуск приложения
app.listen(params.port, params.hostname, () => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
});
