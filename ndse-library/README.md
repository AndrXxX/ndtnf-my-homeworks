## Домашнее задание к занятию «1.2 Система типов TypeScript. ООП. SOLID»

ТЗ доступно по [ссылке](https://github.com/netology-code/ndtnf-homeworks/blob/master/002-TypeScript).

<details>
<summary>Включает в себя предыдущие задания</summary>


### NDSE - Настройка окружения Node.js и библиотека Express.js

#### Блок 2: Библиотека Express.js
<details>
<summary>Домашнее задание к занятию «2.1. Express»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndse-homeworks/tree/master/006-express).
</details>

<details>
<summary>Домашнее задание к занятию «2.2. Middleware. Паттерн "цепочка обязанностей"»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndse-homeworks/tree/master/007-middleware).
</details>

<details>
<summary>Домашнее задание к занятию «2.3. EJS. Шаблонизаторы»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndse-homeworks/tree/master/008-ejs).
</details>

<details>
<summary>Домашнее задание к занятию «2.5. Docker: контейнеризация приложения»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndse-homeworks/tree/master/009-docker-2).
</details>

<details>
<summary>Домашнее задание к занятию «2.7. Подключение MongoDB в Node.js приложение»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndse-homeworks/tree/master/011-mongo).
</details>

<details>
<summary>Домашнее задание к занятию «2.8 Аутентификация. Passport.js»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndse-homeworks/tree/master/012-auth).
</details>

<details>
<summary>Домашнее задание к занятию «2.9. Realtime-взаимодействие с сервером, протокол websocket»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndse-homeworks/tree/master/013-websocket).
</details>

</details>

Использование:
1. Для разработки:
   * `docker compose -f docker-compose.dev.yml up`

2. Из компактных образов:
   * `docker compose -f docker-compose.build.yml up`

3. Из готовых образов на hub.docker.com:
   * `docker compose -f docker-compose.prod.yml up`

При стандартных настройках приложение будет доступно по адресу [http://localhost:3002/](http://localhost:3002/).

Можно изменить настройки запуска docker-compose с помощью .env. Пример файла: [.env-example](config/.env.example)
Нужно переименовать его в `.env` и запускать приложение добавив конфиг:

1. Для разработки:
   * `docker compose --env-file config/.env -f docker-compose.dev.yml up`

2. Из компактных образов:
   * `docker compose --env-file config/.env -f docker-compose.build.yml up`

3. Из готовых образов на hub.docker.com:
   * `docker compose --env-file config/.env -f docker-compose.prod.yml up`

<details>
<summary>Описание настроек .env для docker-compose</summary>

* `DB_NAME` - название БД
* `DB_USERNAME` - имя пользователя
* `DB_PASSWORD` - имя пользователя

Важно! Вышеуказанные настройки корректно проинициализируются в MongoDB только при первом запуске.
Если в дальнейшем их изменить, то эффекта не будет. Для применения нужно будет очистить папку `db` и после этого запускать `docker-compose`

* `COOKIE_SECRET` - параметр для express session
* `LIBRARY_SERVICE_PORT` - порт, по которому будет доступно приложение библиотека на локальном компьютере
* `COUNTER_SERVICE_PORT` - порт, по которому будет доступно приложение счетчик на локальном компьютере
* `MONGODB_PORT` - внешний порт для подключения к MongoDb
* `MONGO_EXPRESS_PORT` - внешний порт, по которому будет доступна админка MONGO EXPRESS
</details>
