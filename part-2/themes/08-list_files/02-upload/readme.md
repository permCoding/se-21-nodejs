# upload

в этой папке примеры программ по загрузке файлов на сервер с использованием двух библиотек:  
1) express-fileupload  
2) multer  

- ещё немного примеров:
  
```js
const file = req.files.myFile;
const extensionName = path.extname(file.name); // fetch the file extension
const allowedExtension = ['.png','.jpg','.jpeg'];

if(!allowedExtension.includes(extensionName)){
    return res.status(422).send("Invalid Image");
}
```

```js
app.use(fileUpload({
    limits: {
        fileSize: 1024 * 1024 // 1 MB
    },
    abortOnLimit: true
 }));
```
