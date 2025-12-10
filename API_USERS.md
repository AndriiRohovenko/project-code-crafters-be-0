# Users API Documentation

## Endpoints

### GET /api/users

Отримати список всіх користувачів з пагінацією та фільтрами.

**Авторизація:** Потрібна (Bearer token)

**Query параметри:**
- `page` (number, optional) - Номер сторінки (за замовчуванням: 1)
- `limit` (number, optional) - Кількість елементів на сторінку (1-100, за замовчуванням: 10)
- `search` (string, optional) - Пошук по імені або email користувача

**Приклад запиту:**
```bash
GET /api/users?page=1&limit=10&search=john
Authorization: Bearer YOUR_TOKEN_HERE
```

**Успішна відповідь (200):**
```json
{
  "status": "success",
  "data": {
    "users": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "avatar": "https://example.com/avatar.jpg",
        "createdAt": "2024-12-10T10:00:00.000Z",
        "updatedAt": "2024-12-10T10:00:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 47,
      "itemsPerPage": 10,
      "hasNextPage": true,
      "hasPrevPage": false
    }
  }
}
```

**Помилки:**
- `400` - Невалідні параметри пагінації
- `401` - Не авторизований

---

### GET /api/users/:id

Отримати користувача по ID.

**Авторизація:** Потрібна (Bearer token)

**URL параметри:**
- `id` (number, required) - ID користувача

**Приклад запиту:**
```bash
GET /api/users/1
Authorization: Bearer YOUR_TOKEN_HERE
```

**Успішна відповідь (200):**
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "avatar": "https://example.com/avatar.jpg",
      "createdAt": "2024-12-10T10:00:00.000Z",
      "updatedAt": "2024-12-10T10:00:00.000Z"
    }
  }
}
```

**Помилки:**
- `401` - Не авторизований
- `404` - Користувача не знайдено

---

## Приклади використання

### cURL

```bash
# Отримати список користувачів
curl -X GET "http://localhost:3000/api/users?page=1&limit=10" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# Пошук користувачів
curl -X GET "http://localhost:3000/api/users?search=john" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# Отримати користувача по ID
curl -X GET "http://localhost:3000/api/users/1" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### JavaScript (fetch)

```javascript
// Отримати список користувачів
const response = await fetch('http://localhost:3000/api/users?page=1&limit=10', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
const data = await response.json();

// Пошук користувачів
const searchResponse = await fetch('http://localhost:3000/api/users?search=john', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
const searchData = await searchResponse.json();
```

### Axios

```javascript
import axios from 'axios';

// Отримати список користувачів
const { data } = await axios.get('http://localhost:3000/api/users', {
  params: { page: 1, limit: 10, search: 'john' },
  headers: { Authorization: `Bearer ${token}` }
});

console.log(data.data.users);
console.log(data.data.pagination);
```

## Примітки

- Пароль та token користувача не повертаються в відповіді (excluded)
- Пагінація обов'язкова для продуктивності
- Пошук не чутливий до регістру (case-insensitive)
- Результати сортуються за датою створення (newest first)
