import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Code Crafters Recipe API',
      version: '1.0.0',
      description: 'API для публікації та управління рецептами їжі',
      contact: {
        name: 'Code Crafters',
        url: 'https://github.com/AndriiRohovenko/project-code-crafters-be-0',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Унікальний ідентифікатор користувача',
            },
            name: {
              type: 'string',
              description: "Ім'я користувача",
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Email користувача',
            },
            avatar: {
              type: 'string',
              description: 'URL аватара користувача',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата створення',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата оновлення',
            },
          },
        },
        Recipe: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Унікальний ідентифікатор рецепта',
            },
            title: {
              type: 'string',
              description: 'Назва рецепта',
            },
            category: {
              type: 'string',
              description: 'Категорія рецепта',
            },
            area: {
              type: 'string',
              description: 'Регіон кухні',
            },
            instructions: {
              type: 'string',
              description: 'Інструкції приготування',
            },
            description: {
              type: 'string',
              description: 'Опис рецепта',
            },
            thumb: {
              type: 'string',
              description: 'URL зображення рецепта',
            },
            preview: {
              type: 'string',
              description: 'URL превью зображення',
            },
            time: {
              type: 'string',
              description: 'Час приготування',
            },
            youtube: {
              type: 'string',
              description: 'Посилання на YouTube відео',
            },
            tags: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Теги рецепта',
            },
            author: {
              $ref: '#/components/schemas/Author',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        Author: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID автора',
            },
            name: {
              type: 'string',
              description: "Ім'я автора",
            },
            avatar: {
              type: 'string',
              description: 'URL аватара',
            },
          },
        },
        Category: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Унікальний ідентифікатор категорії',
            },
            name: {
              type: 'string',
              description: 'Назва категорії',
            },
            thumb: {
              type: 'string',
              description: 'URL зображення категорії',
            },
          },
        },
        Ingredient: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Унікальний ідентифікатор інгредієнта',
            },
            name: {
              type: 'string',
              description: 'Назва інгредієнта',
            },
            desc: {
              type: 'string',
              description: 'Опис інгредієнта',
            },
            img: {
              type: 'string',
              description: 'URL зображення інгредієнта',
            },
          },
        },
        Area: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Унікальний ідентифікатор регіону',
            },
            name: {
              type: 'string',
              description: 'Назва регіону кухні',
            },
          },
        },
        Testimonial: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Унікальний ідентифікатор відгука',
            },
            owner: {
              type: 'string',
              description: "Ім'я автора відгука",
            },
            comment: {
              type: 'string',
              description: 'Текст відгука',
            },
          },
        },
        RegisterRequest: {
          type: 'object',
          required: ['name', 'email', 'password'],
          properties: {
            name: {
              type: 'string',
              minLength: 2,
              maxLength: 50,
              description: "Ім'я користувача (від 2 до 50 символів)",
            },
            email: {
              type: 'string',
              format: 'email',
              minLength: 5,
              maxLength: 254,
              description: 'Email користувача',
            },
            password: {
              type: 'string',
              minLength: 6,
              maxLength: 32,
              description: 'Пароль (від 6 до 32 символів)',
            },
          },
        },
        LoginRequest: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: {
              type: 'string',
              format: 'email',
              description: 'Email користувача',
            },
            password: {
              type: 'string',
              description: 'Пароль користувача',
            },
          },
        },
        AuthResponse: {
          type: 'object',
          properties: {
            token: {
              type: 'string',
              description: 'JWT токен для авторизації',
            },
            user: {
              $ref: '#/components/schemas/User',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Повідомлення про помилку',
            },
          },
        },
        FollowRequest: {
          type: 'object',
          required: ['followingId'],
          properties: {
            followingId: {
              type: 'integer',
              minimum: 1,
              description: 'ID користувача для підписки',
            },
          },
        },
      },
    },
    security: [],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
