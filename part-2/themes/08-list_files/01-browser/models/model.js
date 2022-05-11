// model data - модель данных
const {readdirSync, statSync} = require('fs');
const path = require('path');

let model_data = {
    title: "List of files",
    heading: "Список файлов",
    list_files: [], // тут будет список объектов про файлы
};

/* эта функция будет получать список файлов с путями к ним и их размерами */
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

module.exports = {
    model_data,
    get_list_files
}