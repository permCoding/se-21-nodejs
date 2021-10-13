// npm install inquirer

const inquirer = require('inquirer');
const square_circle = require('./module').get_square_circle;

const get_result = () => inquirer
    .prompt([
        {
            name: "radius",
            type: "number",
            message: "Введите радиус - ",
        },
        {
            name: "count",
            type: "number",
            message: "Введите количество знаков после запятой - ",
        },
    ])
    .then((answers) => {
        console.log(`result = ${square_circle(answers['radius'], answers['count'])}`);    
});

get_result();