const inquirer = require('inquirer');

var quest = () => inquirer
    .prompt([
    {
        name: "gender",
        type: "confirm",
        message: "Пол мужской?",
    },
    ])
    .then((answer) => {
        console.log(answer.gender?'man':'woman');
    });

quest();