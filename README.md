# se-21-nodejs
software engineering 2021-2022

Объём учебной дисциплины  
(семестр 1 - nodejs): Лекций - 12; л/р - 9; Экзамен + КП  
(семестр 2 - C#): Лекций - 12; л/р - 9; Экзамен    
Пример курсовика: http://coding.1gb.ru/  
  
--- 

### Установить:  
[Node.js](https://nodejs.org/)  
[VS Code](https://code.visualstudio.com/)  
[Горячие клавиши VSCode](VSCodeHotKeys.md)  
Расширение Node.js Exec (запуск программы F8)  

```js
// Установка доп-ных пакетов:  
npm install название-пакета  
// или сокращённо:  
npm i название-пакета  
```

---  

### Лекции дистанционно тут:  

[Кабинет Программная инженерия - bbb6](https://bbb6.psaa.ru/b/76k-oto-gpt-xpb)  
--- 

### useful links  
[Рейтинг группы ПИб-3](https://docs.google.com/spreadsheets/d/1V9An642lHUishsy4kFHOG-jd8mUmNjvBxWirgjTjjVs/edit?usp=sharing)  
[ГОСТ по Алгоритмам](https://pcoding.ru/gost/GOST_19.701-90_%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D1%8B.pdf)  

---  

## ЛЕКЦИИ  

Лекция 01 - 14.10.21 - [Программная инженерия](https://docs.google.com/presentation/d/1fJ3FA3rolKLPQhsjJaUgCpl53H-k6FthlGoa6kzm3bs/edit?usp=sharing)  
Лекция 02 - 14.10.21 - [Введение](https://github.com/permCoding/se-21-nodejs/tree/main/theme-01-io)  
Лекция 03 - 28.10.21 - [Модули в Node.js - Видео-запись Лекции в BBB](https://bbb6.psaa.ru/playback/presentation/2.3/f4fd494c27cf032e06779c00db49cb30d43675a7-1635396294019)  
Лекция 04 - 28.10.21 - [Обработка массивов](https://github.com/permCoding/se-21-nodejs/tree/main/theme-02-array)  
Лекция 05 - 11.11.21 - [Функциональное программирование - Видео-запись Лекции в BBB](https://bbb6.psaa.ru/playback/presentation/2.3/f4fd494c27cf032e06779c00db49cb30d43675a7-1636599886789)  
Лекция 06 - 11.11.21 - [Функциональное программирование - примеры программ](https://github.com/permCoding/se-21-nodejs/tree/main/theme-03-func-coding)  

## ЛАБРАБ  

**Лабораторка 01**  
Задание 1.  
Пользователь вводит в консоли с клавиатуры число вещественное из диапазона [0; 100].  
Программа должна перевести его в двоичную систему счисления.  
Нужно подготовить блок-схему алгоритма в diagrams.net  
Задание 2.  
И написать программу на Node.js  

**Лабораторка 02**  
Задание 1.  
Написать функцию на Node.js, которая на вход получает строку с целыми числами, записанными через пробел, а на выход возвращает сумму этих чисел.  
Нужно выполнить задание без использования функционального стиля (без split, map, filter, reduce).  
Можно использовать циклы for или while, условия if и массивы.  
За основу можете взять разбор программы, сделанной во время Лекции и размещённой в папке [labrab-02](https://github.com/permCoding/se-21-nodejs/tree/main/labrabs/labrab-02)  

```js
// это шаблон программы

line = "100 200      3 5 6 999";

arr_s = f_split(line);
arr_n = f_map(arr_s);
arr_f = f_filter(arr_n);
sum = f_sum(arr_f);

console.log(sum);
```

**Лабораторка 03**  
Обработка массивов  
Решать задачи следует тут: https://stepik.org/lesson/416145/step/1?unit=405659  
Обязательное требование: решать в функциональном стиле (map, filter, reduce).  

```txt

```
