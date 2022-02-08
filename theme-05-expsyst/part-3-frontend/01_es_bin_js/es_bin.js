var post; // текущий пост
var txtQuest; // поле для вывода вопроса
var txtYes; // поле варианта ответа
var txtNo; // поле варианта ответа
var colors; // массив цветов выкл/вкл
var run; // запущено или остановлено приложение

function init() {
    run = true; // запустить приложение
    colors = ['#464', '#777']; // назначить цвета ВКЛ/ВЫКЛ
    txtQuest = document.getElementById("quest");
    txtYes = document.getElementById("itemYes");
    txtNo = document.getElementById("itemNo");
    txtTitle = document.getElementById("title");
    txtTitle.innerHTML = es.title;
    post = Object.keys(es.dict)[0]; // узнать вопрос
    txtQuest.innerHTML = post; // опубликовать вопрос
}

function next(answer) {
    if (run) {
        post = Object.values(es.dict[post])[answer-1];
        txtQuest.innerHTML = post;
        if (post.slice(-1) == '.') {
            run = false; // остановить работу ЭС
            document.getElementById('img').src = "img/" + post + "png";
        }    
    }
}

function itemOn(item, num) {
    if (item=='Yes') {
        txtYes.style = 'background-color: ' + colors[num];
    }
    if (item=='No') {
        txtNo.style = 'background-color: ' + colors[num];
    }
}
