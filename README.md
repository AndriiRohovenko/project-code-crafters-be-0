# Code Crafters - Recipe API

API для публікації та управління рецептами їжі.

## 📑 Зміст

- [🚀 Технології](#-технології)
- [📋 Вимоги](#-вимоги)
- [🛠 Встановлення](#-встановлення)
  - [Docker (Рекомендовано)](#варіант-1-docker-рекомендовано-)
  - [Локальна установка PostgreSQL](#варіант-2-локальна-установка-postgresql-)
- [🏃 Запуск](#-запуск)
- [📚 API Документація](#-api-документація)
- [🔐 Авторизація](#-авторизація)
- [🗄 База даних](#-база-даних)
- [📁 Структура проекту](#-структура-проекту)
- [🧪 Тестування](#-тестування)
- [🔧 Скрипти](#-скрипти)

---

## 🚀 Технології

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **PostgreSQL** - Database
- **Sequelize** - ORM для роботи з базою даних
- **JWT** - Аутентифікація
- **Swagger** - API документація
- **Bcrypt** - Хешування паролів
- **Joi** - Валідація даних

## 📋 Вимоги

- Node.js >= 14.x
- PostgreSQL >= 12.x
- npm або yarn

## 🛠 Встановлення

### Загальні кроки:

1. **Клонуйте репозиторій:**

```bash
git clone https://github.com/AndriiRohovenko/project-code-crafters-be-0.git
cd project-code-crafters-be-0
```

2. **Встановіть залежності:**

```bash
npm install
```

3. **Створіть файл `.env`:**

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=foodies_dev
DB_USER=postgres
DB_PASSWORD=postgres
JWT_SECRET=your_jwt_secret_key_here
```

### Варіант 1: Docker (Рекомендовано) 🐳

**Швидкий старт:**

```bash
# Запустити PostgreSQL в Docker
docker-compose up -d

# Виконати міграції
npm run db:migrate

# Заповнити базу даними
npm run db:reseed
```

✅ **Готово!** PostgreSQL та pgAdmin запущені.

**Доступ до pgAdmin:** http://localhost:5050
- Email: `admin@foodies.com`
- Password: `admin`

Детальніше про Docker: [Дивіться розділ Docker Setup нижче](#-docker-setup-детально)

---

### Варіант 2: Локальна установка PostgreSQL 💻

**Кроки:**

1. Встановіть PostgreSQL: https://www.postgresql.org/download/

2. Створіть базу даних:

```bash
psql -U postgres
CREATE DATABASE foodies_dev;
\q
```

3. Оновіть `.env` з вашим паролем PostgreSQL

4. Запустіть міграції та seeders:

```bash
npm run db:migrate
npm run db:reseed
```

Детальніше: [Дивіться розділ Локальна установка нижче](#-локальна-установка-postgresql-альтернатива-docker)

## 🏃 Запуск

### Режим розробки:

```bash
npm run dev
```

### Режим продакшн:

```bash
npm start
```

Сервер буде доступний за адресою: `http://localhost:3000`

## 📚 API Документація

Після запуску сервера, повна інтерактивна документація API доступна за адресою:

### **http://localhost:3000/api-docs**

Swagger UI надає:

- 📖 Повний опис всіх endpoints
- 🔍 Детальні схеми request/response
- 🧪 Можливість тестування API прямо з браузера
- 🔐 Інтерфейс для авторизації через JWT токен
- 📝 Приклади запитів та відповідей

### Основні групи endpoints:

#### Authentication (`/api/auth`)

- `POST /api/auth/register` - Реєстрація нового користувача
- `POST /api/auth/login` - Вхід в систему
- `POST /api/auth/logout` - Вихід з системи (потрібна авторизація)

#### Users (`/api/users`)

- `GET /api/users` - Отримати список користувачів
- `GET /api/users/:id` - Отримати користувача по ID
- `GET /api/users/current` - Отримати поточного користувача
- `GET /api/users/:id/followers` - Отримати підписників користувача
- `GET /api/users/current/following` - Отримати підписки користувача
- `POST /api/users/follow` - Підписатися на користувача
- `DELETE /api/users/unfollow` - Відписатися від користувача

#### Recipes (`/api/recipes`)

- `GET /api/recipes/search` - Пошук рецептів
- `GET /api/recipes/popular` - Отримати популярні рецепти
- `GET /api/recipes/:id` - Отримати рецепт по ID
- `POST /api/recipes` - Створити новий рецепт (потрібна авторизація)

#### Categories (`/api/categories`)

- `GET /api/categories` - Отримати всі категорії

#### Ingredients (`/api/ingredients`)

- `GET /api/ingredients` - Отримати всі інгредієнти

#### Areas (`/api/areas`)

- `GET /api/areas` - Отримати всі регіони кухонь

#### Testimonials (`/api/testimonials`)

- `GET /api/testimonials` - Отримати всі відгуки

## 🔐 Авторизація

Для доступу до захищених endpoints потрібно:

1. Зареєструватися або увійти в систему через `/api/auth/register` або `/api/auth/login`
2. Отримати JWT токен у відповіді
3. Додати токен в заголовок запиту:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

В Swagger UI використовуйте кнопку **"Authorize"** для додавання токену.

## 🗄 База даних

### Міграції

Створити нову міграцію:

```bash
npx sequelize-cli migration:generate --name migration-name
```

Запустити всі міграції:

```bash
npm run db:migrate
```

Відкотити останню міграцію:

```bash
npm run db:migrate:undo
```

Відкотити всі міграції:

```bash
npm run db:migrate:undo:all
```

### Seeders

Запустити всі seeders:

```bash
npm run db:seed:all
```

Відкотити всі seeders:

```bash
npm run db:seed:undo:all
```

**Скинути та перезаповнити базу даних (рекомендовано):**

```bash
npm run db:reseed
```

> 💡 Ця команда виконує три дії: 1) Видаляє всі таблиці та індекси (DROP SCHEMA), 2) Запускає всі міграції для створення таблиць заново, 3) Заповнює базу даних через seeders. Використовуйте її замість `db:seed:undo:all && db:seed:all` для коректного перезаповнення бази даних.

## 📁 Структура проекту

```
project-code-crafters-be-0/
├── controllers/        # Контролери для обробки запитів
├── db/
│   ├── config/        # Конфігурація бази даних
│   ├── migrations/    # Міграції бази даних
│   ├── models/        # Sequelize моделі
│   └── seeders/       # Початкові дані
├── dtos/              # Data Transfer Objects
├── helpers/           # Допоміжні функції
├── middlewares/       # Middleware функції
├── routes/            # Визначення маршрутів API
├── schemas/           # Joi схеми валідації
├── services/          # Бізнес-логіка
├── swagger.js         # Конфігурація Swagger
└── app.js            # Точка входу додатку
```

## 🧪 Тестування

Для тестування API рекомендується використовувати:

- **Swagger UI** (`http://localhost:3000/api-docs`) - вбудований інтерфейс
- **Postman** - для більш складних сценаріїв
- **curl** - для швидких тестів з командного рядка

Приклад curl запиту:

```bash
# Реєстрація
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'

# Вхід
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

## 🔧 Скрипти

**Сервер:**
- `npm start` - Запуск сервера в продакшн режимі
- `npm run dev` - Запуск сервера в режимі розробки з nodemon

**База даних - Міграції:**
- `npm run db:migrate` - Запуск міграцій бази даних
- `npm run db:migrate:undo` - Відкат останньої міграції
- `npm run db:migrate:undo:all` - Відкат всіх міграцій

**База даних - Seeders:**
- `npm run db:seed:all` - Запуск всіх seeders
- `npm run db:seed:undo:all` - Відкат всіх seeders
- `npm run db:reseed` - ⭐ Скинути БД, запустити міграції та seeders (рекомендовано)
- `npm run db:reset` - Видалити всі таблиці та індекси

**Якість коду:**
- `npm run lint` - Перевірка коду з ESLint
- `npm run format` - Форматування коду з Prettier

---

## 🐳 Docker Setup (детально)

### Переваги Docker:
- ✅ Швидке розгортання без установки PostgreSQL
- ✅ Ізольоване середовище
- ✅ Легке видалення
- ✅ Включає pgAdmin для управління

### Швидкий старт з Docker:

**1. Переконайтеся що Docker Desktop запущений**

```bash
# Windows/Mac: Запустіть Docker Desktop з меню
# Linux: sudo systemctl start docker
```

**2. Запустити PostgreSQL в Docker**

```bash
docker-compose up -d
```

Це запустить:
- **PostgreSQL** на порту `5432`
- **pgAdmin** на порту `5050` (веб-інтерфейс)

**3. Параметри підключення:**

```
Host: localhost
Port: 5432
Database: foodies_dev
Username: postgres
Password: postgres
```

**4. Доступ до pgAdmin:**

Відкрийте браузер: `http://localhost:5050`

- Email: `admin@foodies.com`
- Password: `admin`

**5. Виконати міграції та seeders:**

```bash
npm install
npm run db:migrate
npm run db:reseed
```

### Корисні команди Docker:

```bash
# Запустити контейнери
docker-compose up -d

# Зупинити контейнери
docker-compose down

# Зупинити і видалити volumes (ВИДАЛИТЬ ВСІ ДАНІ!)
docker-compose down -v

# Переглянути логи PostgreSQL
docker-compose logs postgres

# Переглянути логи в реальному часі
docker-compose logs -f postgres

# Зайти в контейнер PostgreSQL
docker exec -it foodies_postgres psql -U postgres -d foodies_dev

# Перезапустити контейнери
docker-compose restart

# Створити backup БД
docker exec foodies_postgres pg_dump -U postgres foodies_dev > backup.sql

# Відновити з backup
docker exec -i foodies_postgres psql -U postgres -d foodies_dev < backup.sql
```

### Troubleshooting Docker:

**ERROR: connect ECONNREFUSED**

- **Причина:** Docker Desktop не запущений
- **Рішення:** Запустіть Docker Desktop та зачекайте поки іконка стане зеленою

---

## 💻 Локальна установка PostgreSQL (альтернатива Docker)

### Встановлення:

1. Завантажте PostgreSQL: https://www.postgresql.org/download/
2. Запам'ятайте пароль для користувача `postgres`

### Створення бази даних:

```bash
# Підключіться до PostgreSQL
psql -U postgres

# Створіть базу даних
CREATE DATABASE foodies_dev;

# Вийдіть з psql
\q
```

### Налаштування `.env`:

```env
PORT=3000
APP_DOMAIN=http://localhost:3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=foodies_dev
DB_USER=postgres
DB_PASSWORD=your_postgres_password

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d

# Cloudinary (за потреби)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Запуск міграцій:

```bash
npm run db:migrate
npm run db:reseed
```

---

## 📊 Структура БД (детально)

### 9 таблиць:

**1. users** - користувачі системи
- id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
- name (STRING)
- email (STRING, UNIQUE)
- password (STRING)
- avatar (STRING, nullable)
- createdAt, updatedAt

**2. areas** - кухні світу
- id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
- name (STRING, UNIQUE)
- createdAt, updatedAt

**3. categories** - категорії рецептів
- id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
- name (STRING, UNIQUE)
- createdAt, updatedAt

**4. ingredients** - інгредієнти
- id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
- name (STRING)
- desc (TEXT, nullable) ⭐ новое поле
- img (STRING, nullable)
- createdAt, updatedAt

**5. recipes** - рецепти
- id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
- title (STRING)
- categoryId (INTEGER, FOREIGN KEY -> categories.id) ⭐
- areaId (INTEGER, FOREIGN KEY -> areas.id) ⭐
- instructions (TEXT)
- description (TEXT, nullable)
- thumb (STRING, nullable)
- time (STRING, nullable)
- userId (INTEGER, FOREIGN KEY -> users.id)
- createdAt, updatedAt

**6. recipe_ingredients** - зв'язок рецептів та інгредієнтів
- id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
- recipeId (INTEGER, FOREIGN KEY -> recipes.id)
- ingredientId (INTEGER, FOREIGN KEY -> ingredients.id)
- measure (STRING, nullable)
- createdAt, updatedAt

**7. testimonials** - відгуки
- id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
- ownerId (INTEGER, FOREIGN KEY -> users.id)
- testimonial (TEXT)
- createdAt, updatedAt

**8. followers** - підписки користувачів
- id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
- userId (INTEGER, FOREIGN KEY -> users.id)
- followerId (INTEGER, FOREIGN KEY -> users.id)
- createdAt, updatedAt
- UNIQUE constraint на (userId, followerId)

**9. favorites** - улюблені рецепти
- id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
- userId (INTEGER, FOREIGN KEY -> users.id)
- recipeId (INTEGER, FOREIGN KEY -> recipes.id)
- createdAt, updatedAt
- UNIQUE constraint на (userId, recipeId)

### Зв'язки між моделями:

- **Category -> Recipe** (one-to-many) ⭐
- **Area -> Recipe** (one-to-many) ⭐
- User -> Recipe (one-to-many)
- User -> Testimonial (one-to-many)
- Recipe <-> Ingredient (many-to-many через recipe_ingredients)
- User <-> User (self-referencing many-to-many через followers)
- User <-> Recipe (many-to-many через favorites)

### Приклад використання моделей:

```javascript
// Отримати рецепт з категорією та регіоном
const recipe = await Recipe.findOne({
  where: { id: 1 },
  include: [
    { model: Category, as: 'categoryInfo' },
    { model: Area, as: 'areaInfo' },
    { model: User, as: 'owner' },
  ],
});

console.log(recipe.categoryInfo.name); // "Dessert"
console.log(recipe.areaInfo.name); // "British"
```

### Тестові дані (Seeders):

Після виконання `npm run db:reseed` ви отримаєте:

- **27 regions** (Ukrainian, Italian, British, Japanese, тощо)
- **15 categories** (Dessert, Chicken, Beef, Seafood, тощо)
- **3 users** з паролем `password123`:
  - goit@gmail.com
  - user@gmail.com
  - larry@gmail.com
- **574 інгредієнти** з описами та зображеннями
- **285 рецептів** з повною інформацією
- **2990 зв'язків** recipe_ingredients
- **3 відгуки** від користувачів

---

## 👥 Команда Code Crafters

Проект розробляється командою Code Crafters.

## 📝 Ліцензія

ISC

ISC

## 🔗 Посилання

- [GitHub Repository](https://github.com/AndriiRohovenko/project-code-crafters-be-0)
- [Issues](https://github.com/AndriiRohovenko/project-code-crafters-be-0/issues)
