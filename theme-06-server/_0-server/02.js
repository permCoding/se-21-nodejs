const http = require('http');

http.createServer((req, res) => {    
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Экспертная система</title>
        </head>
        <body>            
            <br><div id="title">Название ЭС</div>
            <table id="dialog">
                <tr id="reload">
                    <td class="quest" id="quest">Вопрос</td>
                </tr>
                <tr class="line line0">
                    <td class="answer" id="answer0">Вариант ответа</td>
                </tr>
                <tr class="line line1">
                    <td class="answer" id="answer1">Вариант ответа</td>
                </tr>
            </table>
        </body>
        </html>
    `);
}).listen(3000, () => console.log('Server on 3000'));
