// model data - модель данных
const {readdirSync, statSync} = require('fs');
const path = require('path');

let model_data = {
    title: "List of files",
    heading: "Список файлов",
    list_files: [], // тут будет список объектов про файлы
};

/* эта функция будет получать список файлов из папки dir с путями к ним и их размерами */
const get_list_files = (dir) => {
    return readdirSync(dir, 'utf8') // всё содержимое папки dir
        .filter(item => statSync(path.join(dir, item)).isFile()) // только файлы
        .map(item => { return { // формируем объекты с данными про файлы
            'file_path': dir, 
            'file_name': item, 
            'file_size': statSync(path.join(dir, item)).size
        }}); // возвращаем массив объектов с данными про файлы
};

/* эта функция будет получать список файлов 
 * из папки dir включая все вложенные папки
 * с путями к ним и размерами файлов
 */
const get_list_files_full = (dir) => {
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
    get_list_files,
    get_list_files_full
}
