const http = require('http');
const tmp = require('tmp');
const typeIs = require('type-is');
const util = require("util");
const path = require('path');

const config = {
  // 10 mb
  maxFileSize: 10485760,
  allowedMimeTypes: ["image/gif", "image/jpeg", "image/pjpeg", "image/png", "image/webp"],
  allowedExtensions: ['png', 'gif', 'jpeg', 'jpg', 'webp']
};
// Функция для подсчёта байт в потоке пришедших к текщему моменту времени. Будучи "присоединённой" к потоку, следит за новыми чанками. При появлении кидает событие "progress" и передёт пришедший чанк далее (вниз по потоку).
function StreamLength(){return this instanceof StreamLength?(Transform.call(this),void(this.bytes=0)):new StreamLength}
var Transform=require("stream").Transform;
util.inherits(StreamLength,Transform);
StreamLength.prototype._transform=function(a,b,c){this.bytes+=a.length;this.push(a);this.emit("progress");c()};

http.createServer(function(request, response) {
  request.on('error', function(err) {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', function(err) {
    console.error(err);
  });
  var found;
  if ((found = request.url.match(/^\/([^\/]+?)\/?$/i)) !== null && request.method === 'PUT') {
    let filename = found[1];
    let contentLength = request.headers['content-length'];
    let contentType = request.headers['content-type'];
    if ((typeof config.maxFileSize !== 'undefined') && !isNaN(+config.maxFileSize) && !isNaN(+contentLength) && +contentLength > +config.maxFileSize) {
      response.statusCode = 413;
      response.end();
    } else if ((typeof contentType !== 'undefined') && (typeof config.allowedMimeTypes !== 'undefined') && !typeIs.is(contentType, config.allowedMimeTypes)) {
      response.statusCode = 422;
      response.end();
    } else if ((typeof config.allowedExtensions !== 'undefined') && !config.allowedExtensions.includes(path.extname(filename).toLowerCase().replace('.', ''))) {
      res.statusCode = 422;
      res.end();
    } else {
      let internalErrorResponse = () => {
        response.statusCode = 500;
        response.end();
      };
      tmp.file(function _tempFileCreated(err, path, fd, cleanupCallback) {
        if (err) internalErrorResponse();
        else {
          let outStream = fs.createWriteStream(null, {fd});
          let aborted = false;
          let abortWithError = function(uploadError) {
            if (!aborted) {
              aborted = true;
              if (uploadError.code !== 'EEXIST') {
                cleanupCallback(internalErrorResponse);
              } else {
                internalErrorResponse();
              }
            }
          };
          outStream.on('finish', function () {
            // к этому моменту файл полность загружен путь до файла лежит в переменной "path". Остаётся только проверить тип файла и в случае несоответствия удалить его.
            // тут какие-то ваши операции. Наример, если вы работаете с картинками, то тут самое время пережать их в нужные вам размеры.
            // после всех операций удаляем временный файл
            cleanupCallback();
            // возвращаем пользователю ответ
            response.statusCode = 201;
            response.end();
          });
          outStream.on('error', function(err) {
            abortWithError(err);
          });
          let counter = new StreamLength();
          counter.on('progress', function(){
            if (((!isNaN(+contentLength) && counter.bytes > +contentLength) || (counter.bytes > +config.maxFileSize)) && !aborted) {
              aborted = true;
              cleanupCallback(function () {
                res.statusCode = 413;
                res.end();
              });
            }
          });
          request.on('abort', function () {
            cleanupCallback();
          });
          request.on('aborted', function () {
            cleanupCallback();
          });
          request.pipe(counter).pipe(outStream);
        }
      });
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(process.env.PORT || 3000);