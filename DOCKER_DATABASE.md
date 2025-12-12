# Docker PostgreSQL Setup

## Швидкий старт

### 0. Переконайтеся що Docker Desktop запущений

**Windows:** Запустіть Docker Desktop з меню Пуск

**Mac:** Запустіть Docker Desktop з Applications

**Linux:** Переконайтеся що Docker daemon запущений:

```bash
sudo systemctl start docker
```

### 1. Запустити PostgreSQL в Docker

```bash
# Запустити контейнери
docker-compose up -d

# Перевірити статус
docker-compose ps
```

Це запустить:

- **PostgreSQL** на порту `5432`
- **pgAdmin** на порту `5050` (веб-інтерфейс для управління БД)

### 2. Доступ до PostgreSQL

**Параметри підключення:**

```
Host: localhost
Port: 5432
Database: foodies_dev
Username: postgres
Password: postgres
```

### 3. Доступ до pgAdmin

Відкрийте браузер: `http://localhost:5050`

**Логін:**

- Email: `admin@foodies.com`
- Password: `admin`

**Додати сервер в pgAdmin:**

1. Клікніть "Add New Server"
2. На вкладці "General": Name = `Foodies DB`
3. На вкладці "Connection":
   - Host: `postgres` (або `host.docker.internal` для Windows/Mac)
   - Port: `5432`
   - Database: `foodies_dev`
   - Username: `postgres`
   - Password: `postgres`

### 4. Виконати міграції та заповнити дані

```bash
# Встановіть залежності (якщо ще не встановлені)
npm install

# Запустіть міграції
npm run db:migrate

# Заповніть БД тестовими даними
npm run db:seed:all
```

**Тестові користувачі:**

- goit@gmail.com / password123
- user@gmail.com / password123
- larry@gmail.com / password123

## Корисні команди Docker

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
```

## SQL команди через Docker

```bash
# Виконати SQL команду
docker exec -it foodies_postgres psql -U postgres -d foodies_dev -c "SELECT * FROM users;"

# Відкрити psql консоль
docker exec -it foodies_postgres psql -U postgres -d foodies_dev

# Створити backup БД
docker exec foodies_postgres pg_dump -U postgres foodies_dev > backup.sql

# Відновити з backup
docker exec -i foodies_postgres psql -U postgres -d foodies_dev < backup.sql
```

## Підключення з додатку

Ваш `.env` файл повинен містити:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=foodies_dev
DB_USER=postgres
DB_PASSWORD=postgres
```

## Troubleshooting

### ERROR: connect ECONNREFUSED або "The system cannot find the file specified"

**Причина:** Docker Desktop не запущений

**Рішення:**

1. Запустіть Docker Desktop (Windows/Mac)
2. Зачекайте поки Docker повністю завантажиться (іконка в tray стане зеленою)
3. Спробуйте знову:
   ```bash
   docker-compose up -d
   ```

**Перевірка:**

```bash
# Має показати версію
docker ps

# Має показати інформацію про систему
docker info
```

### Порт 5432 вже зайнятий

Якщо у вас вже встановлений PostgreSQL локально:

**Варіант 1:** Змініть порт в `docker-compose.yml`:

```yaml
ports:
  - '5433:5432' # Використовуємо 5433 замість 5432
```

Тоді в `.env`:

```env
DB_PORT=5433
```

**Варіант 2:** Зупиніть локальний PostgreSQL:

```bash
# Windows
net stop postgresql-x64-16

# Linux/Mac
sudo systemctl stop postgresql
```

### Контейнер не запускається

```bash
# Перегляньте логи
docker-compose logs postgres

# Видаліть volumes і спробуйте знову
docker-compose down -v
docker-compose up -d
```

### Не можу підключитися до pgAdmin

Переконайтеся що контейнер запущений:

```bash
docker-compose ps
```

Якщо pgAdmin не потрібен, закоментуйте секцію в `docker-compose.yml`.

## Змінити паролі

Редагуйте `docker-compose.yml`:

```yaml
environment:
  POSTGRES_PASSWORD: your_secure_password # PostgreSQL пароль
  PGADMIN_DEFAULT_PASSWORD: your_admin_password # pgAdmin пароль
```

Після зміни:

```bash
docker-compose down -v
docker-compose up -d
```

## Production

Для production використовуйте окремий файл `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    restart: always
    environment:
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    # НЕ експозимо порт назовні в production!

volumes:
  postgres_data:
```

Запуск:

```bash
docker-compose -f docker-compose.prod.yml up -d
```
