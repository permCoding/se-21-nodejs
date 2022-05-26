const genDocx = require('generate-docx');
 
const options = {
    template: {
        filePath: 'pattern.docx',
        data: {
            date: '26.05.2022',
            theme: 'Тема',
            group: 'ПИб-41',
            fio: 'Иванов Иван Иванович'
        }
    },
    save: {
        filePath: 'result-' + '26.05.2022' + '.docx'
    }
}
 
genDocx(options)
    .then(console.log)
    .catch(console.error)
