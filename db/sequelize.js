import { Sequelize } from 'sequelize';

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialectOptions: isProduction
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {},
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
});

export default sequelize;
