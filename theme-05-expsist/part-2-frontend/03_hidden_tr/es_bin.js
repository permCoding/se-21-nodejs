// при подключенной библиотеке jQuery в самом конце html-страницы
// глобальные переменные
var post; // текущий пост (не quest, так как там в конце будет ответ)
var colors; // массив цветов выкл/вкл
var run; // запущено или остановлено приложение
var menu = ["ответ Да", "ответ Нет", "ответ Возможно"]
/**
 * функция для поиска поста
 * @param {ответ-Yes-No} answer 
 */ 
let next = function (answer) {
    let index = Number(answer.slice(-1)); // index ответа в меню ответов
    if (run) { // пока не дошли до ответа
        post = es.dict[post][index];
        $('#quest').html(post); // публикуем пост (вопрос/ответ)
        print_menu(post);
    }
}

let print_menu = function (post) {
    $(".answer").hide(); // все пункты скрываем
    menu = es.dict[post]; // узнаём текущие ответы
    if (typeof menu == 'undefined') { // если уже достигнут листок дерева
        run = false; // остановить работу ЭС
        $('#quest').html("Выбор сделан - " + post); // публикуем пост (вопрос/ответ)
    }
    else {
        if (menu.length == 0) { // если нет ответов на вопрос
            $('#quest').html('Для данной категории нет выбора -> ' + post);
        } 
        else {
            $('#quest').html("Сделайте выбор из категории - " + post + ":"); // публикуем пост (вопрос/ответ)
            for (let i = 0; i < menu.length; i++) {
                $(".answer" + String(i)).show(); // открываем только ответы текущего вопроса
                $("#answer" + String(i)).html(menu[i]); // пишем варианты ответов
            }    
        }
    }
}

// обработчики событий jQuery

$(document).ready(function() {
    run = true; // запускаем приложение
    colors = ['#464', '#777'];
    $('#title').html(es.title); // для объекта в DOM`е с таким id
    post = es.start; // узнаем первый вопрос
    $('#quest').html(post);
    print_menu(post);
}); // эта анонимная функция запускается при загрузки страницы

$('img').on('click', () => location.reload()); // для всех такого тега img

$('.item').mousedown(function() {
    let $id = $(this).attr('id'); // узнаём id элемента
    next($id);
});

$('.item').mouseover(function() { // для всех такого класса item
    let $id = $(this).attr('id'); // узнаём id элемента
    $('#'+$id).css('background-color', colors[1]);
});

$('.item').mouseout(function() {
    let $id = $(this).attr('id'); // узнаём id элемента
    $('#'+$id).css('background-color', colors[0]);
});
