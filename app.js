import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import connectDB from './db/connection.js';
import syncDB from './db/sync.js';

import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';
import FileUploadErrorHandler from './middlewares/multerErrorHandler.js';

import testimonialRouter from './routes/TestimonialRouter.js';
import areaRouter from './routes/AreaRouter.js';
import usersRouter from './routes/usersRouter.js';

import categoriesRouter from './routes/CategoriesRouter.js';
import ingredientsRouter from './routes/ingredientsRouter.js';
import recipesRouter from './routes/recipesRouter.js';
import authRouter from './routes/authRouter.js';

const app = express();

// For static folders if will need it
// const publicDir = path.resolve("public");
// app.use(express.static(publicDir));

app.use(cors());
app.use(express.json());

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/testimonials', testimonialRouter);
app.use('/api/areas', areaRouter);
app.use('/api/users', usersRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/ingredients', ingredientsRouter);
app.use('/api/auth', authRouter);
app.use('/api/recipes', recipesRouter);

app.use('/', (req, res) => {
  res.send('Requested root path');
});

app.use(notFoundHandler);
app.use(FileUploadErrorHandler);
app.use(errorHandler);
await syncDB();
await connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
