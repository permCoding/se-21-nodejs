const colors = ['yellow', 'yellowgreen']; // массив цветов выкл/вкл

document
    .querySelectorAll('.menu') // найти массив ячеек таблицы
    .forEach(td => { // для каждой ячейки назначить обработчики событий
        td.addEventListener('mouseenter', () => td.style.backgroundColor = colors[0]);
        td.addEventListener('mouseleave', () => td.style.backgroundColor = colors[1]);
    });
