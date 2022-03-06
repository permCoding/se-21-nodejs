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

 ---  
 
 Для автоматического перезапуска сервера после внесения изменений в файлы проекта:
 
 npm install nodemon -g  
 nodemon app.js  
 
 ---  
 