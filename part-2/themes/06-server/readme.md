остановить сервер -> Ctrl+C <- Windows or Linux  

https://nodejsdev.ru/guide/create-server/#_3  
https://metanit.com/web/nodejs/3.1.php  
http://code.mu/ru/javascript/nodejs/book/prime/server/response/  
https://developer.mozilla.org/ru/docs/Web/HTTP/Status/200  

---  

| http методы | аналоги |
| :-: | :-: |
| GET | SELECT |
| POST | INSERT |
| DELETE | DELETE |
| PUT | UPDATE |

---  

server response answers:  
| range | use |
| :-: | :-: |
| 1xx | information |
| 2xx | success |
| 3xx | redirection |
| 4xx | client errors |
| 5xx | server errors |

[Список кодов состояния HTTP](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP)  
 ---  
 
 Для автоматического перезапуска сервера после внесения изменений в файлы проекта:
 
 npm install nodemon -g  
 nodemon app.js  
 
 ---  
 