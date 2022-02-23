const http = require('http');

const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Экспертная система</title>
        <link rel="stylesheet" href="es.css">
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
        <script src="es.js"></script> <!--машина вывода-->
    </body>
    </html>
`;

const css = `
    body {
        background-color: rgb(15, 35, 28);
        color: #dd7;
        font-family: "Comic Sans MS";
        font-size: 24px;
    }
    table {
        width: 60%;
        background-color: #464;
        border-width: 1px;
        border-style: dashed;
        border-color: yellow;
        margin: auto;
    }
    td {
        padding-left: 15px;
        height: 100px;
        border-color: grey;
        border-width: 1px;
        border-style: solid;
        text-align: center;
    }
    td.quest {
        height: 90px;
        background-color: #353;
        color: #d96;
    }
    td.answer {
        height: 60px;
    }
    div {
        text-align: center;
    }
`;

const js = `
    let colors = ['#464', '#777'];
    document
        .querySelectorAll('#dialog .answer')
        .forEach(td_answer => {
            td_answer.addEventListener('mouseenter', () => td_answer.style.backgroundColor = colors[1]);
            td_answer.addEventListener('mouseleave', () => td_answer.style.backgroundColor = colors[0]);
        });
`;

const server = http.createServer();

server.on('request', (req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(html);
            break;
        case '/es.css':
            res.writeHead(200, { 'Content-Type': 'text/css'});
            res.end(css);
            break;
        case '/es.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript'});
            res.end(js);
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain'});
            res.end('404 Страница не найдена');
            break; 
    }
});

server.listen(3000, () => console.log('Server on 3000'));
