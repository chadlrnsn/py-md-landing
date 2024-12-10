# Доска объявлений на Laravel + Vue

Проект доски объявлений с авторизацией, загрузкой изображений и фильтрацией по категориям.

## Требования

- PHP 8.1+
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) и [npm](https://www.npmjs.com/)
- [Локальный MySQL](https://dev.mysql.com/downloads/mysql/)
- [XAMPP](https://www.apachefriends.org/ru/index.html)

## Установка

1. Установите PHP зависимости:

```bash
composer install
```

2. Установите JavaScript зависимости:

```bash
npm install
```

3. Создайте базу данных и настройте .env файл:

```bash
php artisan migrate
php artisan db:seed
```

4. Сгенерируйте ключ приложения:

```bash
php artisan key:generate
```

5. Создайте символическую ссылку для хранения файлов:

```bash
php artisan storage:link
```

6. Запустите серверы:

```bash
php artisan serve
npm run dev
```

6. Перейдите в браузер и откройте [http://localhost:8000](http://localhost:8000).



## Основные функции

### Авторизация
- Регистрация с подтверждением email
- Авторизация
- Восстановление пароля
- Редактирование профиля
- Загрузка аватара

### Объявления
- Создание объявлений
- Просмотр списка объявлений
- Фильтрация по категориям
- Редактирование своих объявлений
- Удаление своих объявлений

## Структура проекта

### Backend (Laravel)
- `app/Http/Controllers/` - Контроллеры
- `app/Models/` - Модели
- `database/migrations/` - Миграции базы данных
- `database/seeders/` - Сидеры для заполнения базы данных
- `routes/web.php` - Маршруты приложения

### Frontend (Vue)
- `resources/js/Pages/` - Vue компоненты страниц
- `resources/js/Components/` - Переиспользуемые компоненты
- `resources/js/Layouts/` - Шаблоны страниц

## Основные команды
- Очистить кэш приложения

```bash
php artisan cache:clear
```

- Очистить кэш конфигурации

```bash
php artisan config:clear
```


## Дополнительная информация

### Структура базы данных

1. Таблица `users`:
- id
- name
- email
- phone
- password
- avatar
- remember_token
- created_at
- updated_at

2. Таблица `advertisements`:
- id
- title
- category_id
- price
- description
- contact_info
- status
- user_id
- created_at
- updated_at

3. Таблица `categories`:
- id
- name
- slug
- created_at

### Файловая структура для загрузок
- `storage/app/public/user-content/avatars/` - Аватары пользователей

## Решение проблем

1. Если не отображаются загруженные файлы: 

```bash
php artisan storage:link
```

2. Если не применяются изменения в .env:

```bash
php artisan config:clear
php artisan cache:clear 
```

3. Если не работает авторизация:

```bash
php artisan migrate
php artisan db:seed
```