# Markdown Landing Generator

Простой и элегантный генератор лендингов из Markdown файлов с поддержкой тёмной темы и подсветкой синтаксиса.

## Возможности

- 🎨 Автоматическая конвертация Markdown в HTML
- 🌓 Переключение между светлой и тёмной темами
- 📱 Адаптивный дизайн
- 🎯 Автоматическая группировка контента по заголовкам
- ✨ Подсветка синтаксиса для блоков кода
- 📋 Кнопка копирования кода
- 🎯 Поддержка всех стандартных элементов Markdown

## Технологии

- **Backend:**
  - Python 3.8+
  - Flask
  - Python-Markdown
  - Pygments (подсветка синтаксиса)

- **Frontend:**
  - Tailwind CSS
  - @tailwindcss/typography
  - JavaScript (Vanilla)

## Установка

1. Скачайте репозиторий

2. Установите Python зависимости:

```bash
python -m venv venv
pip install -r requirements.txt
.\venv\Scripts\activate
```

3. Установите Node.js зависимости:

```bash
npm install
```

4. Запустите сборку CSS:

```bash
npm run build-css
```

5. Запустите сервер:

```bash
python main.py
```

## Использование

1. Создайте или отредактируйте Markdown файлы в директории `content/`
2. Файл `index.md` является главной страницей
3. Используйте заголовки `# H1` для создания основных секций
4. Используйте заголовки `## H2` для создания подсекций
5. Для блоков кода используйте тройные кавычки с указанием языка:

```python
def hello_world():
    print("Hello, World!")
```

## Структура проекта

```
project/
├── content/          # Markdown файлы
├── static/
│   ├── css/         # Скомпилированные CSS файлы
│   └── src/         # Исходные CSS файлы
├── templates/        # HTML шаблоны
├── main.py          # Flask приложение
├── package.json     # Node.js зависимости
└── requirements.txt # Python зависимости
```

## Настройка

- Настройка Tailwind CSS: `tailwind.config.js`
- Настройка Flask: `main.py`
- Стили типографики: `@tailwindcss/typography` в конфигурации Tailwind

## Лицензия

Apache 2.0

## Автор

Chad Lorenson
