# Foodies Backend - PostgreSQL Setup Options

Цей проект підтримує два способи роботи з PostgreSQL:

## Варіант 1: Docker (Рекомендовано) 🐳

**Переваги:**
- Швидке розгортання без установки PostgreSQL
- Ізольоване середовище
- Легке видалення
- Включає pgAdmin для управління

**Інструкція:** [DOCKER_DATABASE.md](./DOCKER_DATABASE.md)

**Швидкий старт:**
```bash
docker-compose up -d
npm run db:migrate
```

## Варіант 2: Локальна установка PostgreSQL 💻

**Переваги:**
- Працює без Docker
- Вища продуктивність для великих БД
- Простіше для деяких розробників

**Інструкція:** [DATABASE_SETUP.md](./DATABASE_SETUP.md)

**Швидкий старт:**
1. Встановіть PostgreSQL
2. Створіть БД: `CREATE DATABASE foodies_dev;`
3. Налаштуйте `.env`
4. Запустіть: `npm run db:migrate`

---

## Структура БД

Проект використовує **Sequelize ORM** з PostgreSQL.

**9 таблиць:**
- users (користувачі)
- areas (кухні)
- categories (категорії)
- ingredients (інгредієнти)
- recipes (рецепти)
- recipe_ingredients (зв'язок)
- testimonials (відгуки)
- followers (підписки)
- favorites (улюблені)

Детальна схема: [DATABASE_SETUP.md](./DATABASE_SETUP.md#структура-бд)

## NPM Scripts

```bash
# Міграції
npm run db:migrate              # Застосувати міграції
npm run db:migrate:undo         # Відкотити останню міграцію
npm run db:migrate:undo:all     # Відкотити всі міграції

# Seeders (тестові дані)
npm run db:seed:all             # Заповнити БД тестовими даними
npm run db:seed:undo:all        # Очистити тестові дані

# Повне перевстановлення БД
npm run db:migrate:undo:all && npm run db:migrate && npm run db:seed:all

# Сервер
npm run dev                     # Запустити в режимі розробки
npm start                       # Запустити production
```

## Тестові дані (Seeders)

Після виконання `npm run db:seed:all` ви отримаєте:

- **27 regions** (Ukrainian, Italian, British, Japanese, тощо)
- **15 categories** (Dessert, Chicken, Beef, Seafood, тощо)
- **3 users** з паролем `password123`:
  - goit@gmail.com
  - user@gmail.com
  - larry@gmail.com
- **20 базових інгредієнтів**
- **3 приклади рецептів** з зв'язками
- **3 відгуки** від користувачів

## Змінні середовища (.env)

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=foodies_dev
DB_USER=postgres
DB_PASSWORD=postgres

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

## Підтримка

Якщо виникли проблеми, перегляньте:
- [DOCKER_DATABASE.md](./DOCKER_DATABASE.md#troubleshooting) - для Docker
- [DATABASE_SETUP.md](./DATABASE_SETUP.md) - для локальної установки
