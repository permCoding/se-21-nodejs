// при подключенной библиотеке jQuery в самом конце html-страницы
// глобальные переменные
var post; // текущий пост (не quest, так как там в конце будет ответ)
var colors; // массив цветов выкл/вкл
var run; // запущено или остановлено приложение

/**
 * функция для поиска поста
 * @param {ответ-Yes-No} answer 
 */ 
let next = function (answer) {
    let index = answer == "Yes"? 0: 1;
    if (run) {
        post = Object.values(es.dict[post])[index];
        $('#quest').html(post); // публикуем пост (вопрос/ответ)
        add_post(post);
        if (post.slice(-1) == '.') { // если уже ответ
            run = false; // остановить работу ЭС
            $('img').attr("src", "img/" + post + "png");
        }
    }
}

let add_post = function (post) {
    let text = $('#questions').html();
    $('#questions').html(text + '\n' + post);
} 

// обработчики событий jQuery

$(function() {
    run = true; // запускаем приложение
    colors = ['#464', '#777'];
    $('#title').html(es.title); // для объекта в DOM`е с таким id
    post = Object.keys(es.dict)[0]; // узнаем первый вопрос
    $('#quest').html(post);
    $('#questions').html("Все промежуточные вопросы: ");
    add_post(post);
}); // эта анонимная функция запускается при загрузки страницы

$('img').on('click', () => location.reload()); // для всех такого тега img

$('.item').mousedown(function() {
    var $id = $(this).attr('id'); // узнаём id элемента
    next($id);
});

$('.item').mouseover(function() { // для всех такого класса item
    var $id = $(this).attr('id'); // узнаём id элемента
    $('#'+$id).css('background-color', colors[1]);
});

$('.item').mouseout(function() {
    var $id = $(this).attr('id'); // узнаём id элемента
    $('#'+$id).css('background-color', colors[0]);
});
