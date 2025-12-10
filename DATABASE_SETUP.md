# Налаштування PostgreSQL БД для проекту Foodies

## Встановлення PostgreSQL

1. Завантажте та встановіть PostgreSQL з офіційного сайту: https://www.postgresql.org/download/
2. Під час встановлення запам'ятайте пароль для користувача `postgres`

## Створення бази даних

```bash
# Підключіться до PostgreSQL
psql -U postgres

# Створіть базу даних
CREATE DATABASE foodies_dev;

# Вийдіть з psql
\q
```

## Налаштування змінних середовища

Створіть файл `.env` в корені проекту:

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

## Запуск міграцій

```bash
# Виконати всі міграції
npm run db:migrate

# Відкотити останню міграцію
npm run db:migrate:undo

# Відкотити всі міграції
npm run db:migrate:undo:all
```

## Заповнення БД тестовими даними

```bash
# Додати тестові дані (users, areas, categories, recipes, etc.)
npm run db:seed:all

# Видалити всі тестові дані
npm run db:seed:undo:all
```

**Що включають seeders:**
- 27 регіонів кухні (Ukrainian, Italian, British, Japanese, тощо)
- 15 категорій (Dessert, Chicken, Beef, Seafood, тощо)
- 3 тестових користувачі (пароль: `password123`)
- 20 базових інгредієнтів
- 3 приклади рецептів
- 3 відгуки

## Структура БД

### Таблиці:

1. **users** - користувачі системи
   - id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
   - name (STRING)
   - email (STRING, UNIQUE)
   - password (STRING)
   - avatar (STRING, nullable)
   - createdAt, updatedAt

2. **areas** - кухні світу
   - id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
   - name (STRING, UNIQUE)
   - createdAt, updatedAt

3. **categories** - категорії рецептів
   - id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
   - name (STRING, UNIQUE)
   - createdAt, updatedAt

4. **ingredients** - інгредієнти
   - id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
   - name (STRING)
   - img (STRING, nullable)
   - createdAt, updatedAt

5. **recipes** - рецепти
   - id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
   - title (STRING)
   - category (STRING) - legacy поле
   - area (STRING) - legacy поле
   - categoryId (INTEGER, FOREIGN KEY -> categories.id) ⭐
   - areaId (INTEGER, FOREIGN KEY -> areas.id) ⭐
   - instructions (TEXT)
   - description (TEXT, nullable)
   - thumb (STRING, nullable)
   - time (INTEGER, nullable)
   - userId (INTEGER, FOREIGN KEY -> users.id)
   - createdAt, updatedAt

6. **recipe_ingredients** - зв'язок рецептів та інгредієнтів
   - id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
   - recipeId (INTEGER, FOREIGN KEY -> recipes.id)
   - ingredientId (INTEGER, FOREIGN KEY -> ingredients.id)
   - measure (STRING, nullable)
   - createdAt, updatedAt

7. **testimonials** - відгуки
   - id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
   - ownerId (INTEGER, FOREIGN KEY -> users.id)
   - testimonial (TEXT)
   - createdAt, updatedAt

8. **followers** - підписки користувачів
   - id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
   - userId (INTEGER, FOREIGN KEY -> users.id)
   - followerId (INTEGER, FOREIGN KEY -> users.id)
   - createdAt, updatedAt
   - UNIQUE constraint на (userId, followerId)

9. **favorites** - улюблені рецепти
   - id (INTEGER, AUTO_INCREMENT, PRIMARY KEY)
   - userId (INTEGER, FOREIGN KEY -> users.id)
   - recipeId (INTEGER, FOREIGN KEY -> recipes.id)
   - createdAt, updatedAt
   - UNIQUE constraint на (userId, recipeId)

## Зв'язки між моделями

- **Category -> Recipe** (one-to-many) ⭐
- **Area -> Recipe** (one-to-many) ⭐
- User -> Recipe (one-to-many)
- User -> Testimonial (one-to-many)
- Recipe <-> Ingredient (many-to-many через recipe_ingredients)
- User <-> User (self-referencing many-to-many через followers)
- User <-> Recipe (many-to-many через favorites)

## Приклади використання

```javascript
// Отримати рецепт з категорією та регіоном
const recipe = await Recipe.findOne({
  where: { id: 1 },
  include: [
    { model: Category, as: 'categoryInfo' },
    { model: Area, as: 'areaInfo' },
    { model: User, as: 'owner' }
  ]
});

console.log(recipe.categoryInfo.name); // "Dessert"
console.log(recipe.areaInfo.name); // "British"
```

## Корисні команди

```bash
# Запустити сервер у режимі розробки
npm run dev

# Запустити міграції
npm run db:migrate

# Заповнити БД початковими даними (seeders)
npm run db:seed:all

# Очистити дані з seeders
npm run db:seed:undo:all
```

## Примітки

- Всі id є автоінкрементними цілочисельними значеннями
- Видалено вкладеність типу "$oid" з MongoDB
- Додано timestamps (createdAt, updatedAt) для всіх таблиць
- Налаштовано каскадне видалення для залежних записів
- Додано індекси для оптимізації запитів
