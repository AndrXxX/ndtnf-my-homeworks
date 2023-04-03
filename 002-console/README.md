# Домашнее задание к занятию «1.2 Аргументы командной строки и console»

ТЗ доступно по [ссылке](https://github.com/netology-code/ndse-homeworks/tree/master/002-console).

Для установки зависимостей необходимо выполнить `npm install`.

### Задача 1
Утилита получения текущей даты и времени

Примеры использования:
1. Получение текущего времени:
    *  `node date-util.js current`
    *  `node date-util.js current -d` или `node date-util.js current -day`
    *  `node date-util.js current -m` или `node date-util.js current -month`
    *  `node date-util.js current -y` или `node date-util.js current -year`
    *  различные комбинации, например: `node date-util.js current --day -m --year`

2. Возможность получать дату в будущем через команду `add`:
    *  `node date-util.js add -d 1` или `node date-util.js add -day 1`
    *  `node date-util.js add -m 3` или `node date-util.js add -month 3`
    *  `node date-util.js add -y 6` или `node date-util.js add -year 6`
    *  различные комбинации, например: `node date-util.js add --day 1 -m 2 --year 5`

3. Возможность получать дату в прошлом через команду `sub`:
    *  `node date-util.js sub -d 1` или `node date-util.js sub -day 1`
    *  `node date-util.js sub -m 3` или `node date-util.js sub -month 3`
    *  `node date-util.js sub -y 6` или `node date-util.js sub -year 6`
    *  различные комбинации, например: `node date-util.js sub --day 1 -m 2 --year 5`

### Задача 2
Утилита командной строки, которая играет в игру "Загадай число".

Использование:
* `node guess-number.js`
