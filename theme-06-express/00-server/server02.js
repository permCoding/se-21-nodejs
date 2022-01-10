const http = require("http");
const port = 3000;

const server_dialog = (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8;');
    
    response.write('<!DOCTYPE html>');
    response.write('<html><head>');
    response.write('<title>Экспертная система</title>');
    response.write('<meta charset="utf-8" />');
    response.write('</head>');
    response.write('<body bgcolor="#8A9"><center>');
    response.write('<h3>ЭС - подбор животного в зоопарк</h3>');
    response.write('</center></body></html>');

    response.end();
};

http.createServer(server_dialog).listen(port);
