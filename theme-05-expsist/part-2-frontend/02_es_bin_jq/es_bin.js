// при подключенной библиотеке jQuery в самом конце html
var post; // текущий пост
var colors; // массив цветов выкл/вкл
var run; // запущено или остановлено приложение

$(function() {
    colors = ['#464', '#777'];
    $('#title').html(es.title);
    // next("Yes");
});

$('img').on('click', function() {
    location.reload();
});

function next(item) {
    posLines++;
    posLevel++;
    if (item=='No') findPosLine();
    var result = lines[posLines].substring(posLevel);
    if (result[0]==charEnd) {
        result = result.substring(1);
        $('img').attr("src", "img/" + result + ".png");
    }
    else
        result = result + '?';
    $('.quest').html(result);
}

$('.item').mousedown(function() {
    var $id = $(this).attr('id'); // узнаём id элемента
    next($id);
});

$('.item').mouseover(function() {
    var $id = $(this).attr('id'); // узнаём id элемента
    $('#'+$id).css('background-color', colors[1])
});

$('.item').mouseout(function() {
    var $id = $(this).attr('id'); // узнаём id элемента
    $('#'+$id).css('background-color', colors[0])
});
