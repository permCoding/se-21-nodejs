const http = require("http");
const params = { 
    port: 3000, 
    host: '127.0.0.1' // тут может быть адрес сайта
};

let content = '\
    <!DOCTYPE html>\
    <html><head>\
    <title>Экспертная система</title>\
    <meta charset="utf-8" />\
    </head>\
    <body bgcolor="#8A9"><center>\
    <h3>ЭС - подбор животного в зоопарк</h3>\
    </center></body></html>';

const server_dialog = (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8;');
    response.end(content); // end == write + end
};

http
    .createServer(server_dialog)
    .listen(params.port, params.host, () =>
        console.log(`http://${params.host}:${params.port}`)
    );
