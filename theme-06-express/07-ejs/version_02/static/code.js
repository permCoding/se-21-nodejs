// service variables
let colors = ['#464', '#777']; // массив цветов выкл/вкл

// event handlers
document // при клике по ячейке таблицы
    .querySelectorAll('.dialog .answer') // найти массив ячеек таблицы с ответами
    .forEach(td_answer => { // для каждой ячейки назначить обработчики событий
        td_answer.addEventListener('mouseenter', () => td_answer.style.backgroundColor = colors[1]);
        td_answer.addEventListener('mouseleave', () => td_answer.style.backgroundColor = colors[0]);
    });
