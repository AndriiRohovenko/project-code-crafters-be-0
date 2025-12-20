# Error Handling Documentation

## Структура обробки помилок

Проект використовує централізовану систему обробки помилок з наступними компонентами:

### 1. HttpError Helper

Створює кастомні HTTP помилки з статус кодами.

```javascript
import HttpError from '../helpers/HttpError.js';

// Базове використання
throw HttpError(404, 'User not found');

// З деталями
throw HttpError(400, 'Validation failed', {
  field: 'email',
  reason: 'Invalid format',
});
```

**Підтримувані статус коди:**

- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict
- `422` - Unprocessable Entity
- `500` - Internal Server Error

### 2. ctrlWrapper

Wrapper для async контролерів, який автоматично ловить помилки.

```javascript
import ctrlWrapper from '../helpers/ctrlWrapper.js';

export const getUser = ctrlWrapper(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    throw HttpError(404, 'User not found');
  }
  res.json(user);
});
```

**Переваги:**

- Немає потреби в try-catch в кожному контролері
- Автоматична передача помилок в error handler
- Чистіший та читабельніший код

### 3. Validation Middleware

Middleware для валідації даних через Joi.

```javascript
import validateBody, {
  validateQuery,
  validateParams,
} from '../helpers/validateBody.js';
import { userSchema } from '../schemas/userSchemas.js';

// Валідація body
router.post('/users', validateBody(userSchema), createUser);

// Валідація query параметрів
router.get('/users', validateQuery(querySchema), getUsers);

// Валідація params
router.get('/users/:id', validateParams(paramsSchema), getUser);
```

### 4. Error Handler Middleware

Централізований обробник всіх помилок.

**Обробляє:**

- Sequelize ValidationError
- Sequelize UniqueConstraintError
- Sequelize ForeignKeyConstraintError
- Sequelize DatabaseError
- Joi validation errors
- Custom HTTP errors

**Формат відповіді:**

```json
{
  "status": "error",
  "message": "Error message",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```

## Приклади використання

### Sequelize Validation Error

```javascript
// Автоматично обробляється
const user = await User.create({
  email: 'invalid-email',
  name: '' // required field
});

// Відповідь (400):
{
  "status": "error",
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Validation isEmail on email failed",
      "value": "invalid-email"
    },
    {
      "field": "name",
      "message": "name cannot be null",
      "value": ""
    }
  ]
}
```

### Unique Constraint Error

```javascript
// Спроба створити користувача з існуючим email
const user = await User.create({
  email: 'existing@email.com',
  name: 'John'
});

// Відповідь (409):
{
  "status": "error",
  "message": "email already exists",
  "field": "email"
}
```

### Joi Validation Error

```javascript
// В роутері
router.post('/users', validateBody(userSchema), createUser);

// Невалідні дані
POST /users
{
  "email": "invalid",
  "age": "not a number"
}

// Відповідь (400):
{
  "status": "error",
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "\"email\" must be a valid email"
    },
    {
      "field": "age",
      "message": "\"age\" must be a number"
    }
  ]
}
```

### Custom HTTP Error

```javascript
export const deleteUser = ctrlWrapper(async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (!user) {
    throw HttpError(404, 'User not found');
  }

  if (user.role === 'admin') {
    throw HttpError(403, 'Cannot delete admin user');
  }

  await user.destroy();
  res.status(204).send();
});

// Відповідь (403):
{
  "status": "error",
  "message": "Cannot delete admin user"
}
```

### Not Found Route

```javascript
// Неіснуючий маршрут
GET /api/nonexistent

// Відповідь (404):
{
  "status": "error",
  "message": "Route not found",
  "path": "GET /api/nonexistent"
}
```

## Best Practices

### 1. Завжди використовуйте ctrlWrapper

```javascript
// ✅ Правильно
export const getUser = ctrlWrapper(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) throw HttpError(404, 'User not found');
  res.json(user);
});

// ❌ Неправильно
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) throw HttpError(404, 'User not found');
    res.json(user);
  } catch (error) {
    next(error);
  }
};
```

### 2. Валідуйте дані на вході

```javascript
// ✅ Правильно - валідація в роутері
router.post('/users', validateBody(userSchema), createUser);

// ❌ Неправильно - валідація в контролері
export const createUser = ctrlWrapper(async (req, res) => {
  if (!req.body.email) {
    throw HttpError(400, 'Email is required');
  }
  // ...
});
```

### 3. Використовуйте правильні статус коди

- `400` - Невалідні дані від клієнта
- `401` - Не авторизований
- `403` - Немає прав доступу
- `404` - Ресурс не знайдено
- `409` - Конфлікт (наприклад, дублікат)
- `422` - Дані валідні, але не можуть бути оброблені
- `500` - Серверна помилка

### 4. Додавайте контекст до помилок

```javascript
// ✅ Правильно - інформативне повідомлення
throw HttpError(404, `Recipe with id ${id} not found`);

// ❌ Неправильно - загальне повідомлення
throw HttpError(404, 'Not found');
```

### 5. Логування помилок

```javascript
// В development mode помилки автоматично логуються
// В production використовуйте сервіси моніторингу (Sentry, etc.)

if (process.env.NODE_ENV === 'production') {
  // Log to monitoring service
  logger.error(error);
}
```

## Налаштування

### Environment Variables

```env
NODE_ENV=development  # Показувати stack trace
# NODE_ENV=production  # Приховати stack trace
```

### Middleware Order

**Важливо!** Порядок middleware в `app.js`:

```javascript
// 1. Body parsers
app.use(express.json());

// 2. Routes
app.use('/api/users', usersRouter);

// 3. Not found handler
app.use(notFoundHandler);

// 4. Multer error handler (if using file uploads)
app.use(FileUploadErrorHandler);

// 5. Error handler (ЗАВЖДИ ОСТАННІЙ)
app.use(errorHandler);
```

## Testing Error Handling

```javascript
import request from 'supertest';
import app from '../app.js';

describe('Error Handling', () => {
  it('should return 404 for non-existent route', async () => {
    const response = await request(app).get('/api/nonexistent');

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('status', 'error');
    expect(response.body).toHaveProperty('message', 'Route not found');
  });

  it('should return 400 for validation error', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ email: 'invalid' });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('status', 'error');
    expect(response.body).toHaveProperty('errors');
  });
});
```
