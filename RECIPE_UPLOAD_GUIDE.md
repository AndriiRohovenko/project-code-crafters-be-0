# Гайд по створенню рецепту з завантаженням зображення

## Ендпоінт

`POST /api/recipes`

**Авторизація:** Bearer Token (обов'язково)

---

## Варіант 1: Multipart/Form-Data (з завантаженням файлу)

### Postman / Thunder Client

1. **Метод:** POST
2. **URL:** `http://localhost:3000/api/recipes`
3. **Headers:**
   - `Authorization: Bearer YOUR_JWT_TOKEN`
4. **Body:** вибрати `form-data`

#### Поля форми:

| Key            | Value                                                                                                            | Type |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | ---- |
| `title`        | "Pasta Carbonara"                                                                                                | Text |
| `categoryId`   | 1                                                                                                                | Text |
| `areaId`       | 2                                                                                                                | Text |
| `instructions` | "Cook pasta until al dente. Fry bacon until crispy. Mix pasta with bacon and eggs. Season with salt and pepper." | Text |
| `description`  | "Classic Italian pasta dish with creamy sauce"                                                                   | Text |
| `time`         | 25                                                                                                               | Text |
| `ingredients`  | `[{"ingredientId":1,"measure":"400g"},{"ingredientId":2,"measure":"200g"}]`                                      | Text |
| `thumb`        | (вибрати файл зображення)                                                                                        | File |

**Важливо:**

- `ingredients` має бути JSON stringified масивом
- `thumb` - вибрати File type та завантажити зображення (max 5MB, JPG/PNG)

---

## Варіант 2: JSON (без завантаження файлу)

### Якщо не потрібно завантажувати зображення

**Headers:**

```
Content-Type: application/json
Authorization: Bearer YOUR_JWT_TOKEN
```

**Body (JSON):**

```json
{
  "title": "Pasta Carbonara",
  "categoryId": 1,
  "areaId": 2,
  "instructions": "Cook pasta until al dente. Fry bacon until crispy. Mix pasta with bacon and eggs.",
  "description": "Classic Italian pasta dish with creamy sauce",
  "time": 25,
  "ingredients": [
    {
      "ingredientId": 1,
      "measure": "400g"
    },
    {
      "ingredientId": 2,
      "measure": "200g"
    }
  ]
}
```

---

## Варіант 3: cURL команда

### З файлом:

```bash
curl -X POST http://localhost:3000/api/recipes \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "title=Pasta Carbonara" \
  -F "categoryId=1" \
  -F "areaId=2" \
  -F "instructions=Cook pasta until al dente. Fry bacon until crispy." \
  -F "description=Classic Italian pasta dish" \
  -F "time=25" \
  -F 'ingredients=[{"ingredientId":1,"measure":"400g"},{"ingredientId":2,"measure":"200g"}]' \
  -F "thumb=@/path/to/your/image.jpg"
```

### Без файлу (JSON):

```bash
curl -X POST http://localhost:3000/api/recipes \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Pasta Carbonara",
    "categoryId": 1,
    "areaId": 2,
    "instructions": "Cook pasta until al dente. Fry bacon until crispy.",
    "description": "Classic Italian pasta dish",
    "time": 25,
    "ingredients": [
      {"ingredientId": 1, "measure": "400g"},
      {"ingredientId": 2, "measure": "200g"}
    ]
  }'
```

---

## Поля запиту

### Обов'язкові:

- **title** (string, 3-255 символів) - Назва рецепту
- **instructions** (string, мін. 10 символів) - Інструкції приготування

### Опціональні:

- **categoryId** (integer) - ID категорії
- **areaId** (integer) - ID регіону кухні
- **description** (string, max 1000 символів) - Опис рецепту
- **thumb** (file/string) - Зображення (файл) або URL
- **time** (integer) - Час приготування в хвилинах
- **ingredients** (array/string) - Масив інгредієнтів (у FormData - JSON string)

### Формат ingredients:

```json
[
  {
    "ingredientId": 1,
    "measure": "400g"
  },
  {
    "ingredientId": 2,
    "measure": "200g"
  }
]
```

---

## Відповідь

### Успіх (201 Created):

```json
{
  "status": "success",
  "data": {
    "recipe": {
      "id": 123,
      "title": "Pasta Carbonara",
      "category": "Pasta",
      "area": "Italian",
      "instructions": "Cook pasta...",
      "description": "Classic Italian pasta...",
      "thumb": "https://res.cloudinary.com/your-cloud/image/upload/v123456/recipes/abc123.jpg",
      "time": 25,
      "categoryId": 1,
      "areaId": 2,
      "author": {
        "id": 8,
        "name": "John Doe",
        "avatar": "https://..."
      },
      "ingredients": [
        {
          "id": 1,
          "name": "Pasta",
          "img": "https://...",
          "measure": "400g"
        }
      ],
      "favoritesCount": 0
    }
  }
}
```

### Помилки:

**400 Bad Request** - Невалідні дані

```json
{
  "message": "Title must be at least 3 characters long"
}
```

**401 Unauthorized** - Відсутній або невалідний токен

```json
{
  "message": "Not authorized"
}
```

---

## Примітки

1. **Завантаження зображення:**
   - Максимальний розмір: 5MB
   - Підтримувані формати: JPG, PNG, GIF
   - Зображення завантажується на Cloudinary
   - Автоматично генерується secure URL

2. **FormData vs JSON:**
   - Використовуйте FormData, якщо потрібно завантажити файл
   - Використовуйте JSON, якщо файл не потрібен або є URL

3. **Ingredients у FormData:**
   - Має бути JSON string
   - Приклад: `'[{"ingredientId":1,"measure":"400g"}]'`

4. **Авторизація:**
   - Токен обов'язковий для цього ендпоінту
   - Формат: `Authorization: Bearer YOUR_JWT_TOKEN`
