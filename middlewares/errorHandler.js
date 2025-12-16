import { ValidationError, UniqueConstraintError, ForeignKeyConstraintError, DatabaseError } from 'sequelize';

const errorHandler = (err, req, res, next) => {
  // Логування помилки для розробки
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', {
      message: err.message,
      stack: err.stack,
      status: err.status,
    });
  }

  // Sequelize ValidationError
  if (err instanceof ValidationError) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation error',
      errors: err.errors.map(e => ({
        field: e.path,
        message: e.message,
        value: e.value,
      })),
    });
  }

  // Sequelize UniqueConstraintError
  if (err instanceof UniqueConstraintError) {
    const field = err.errors[0]?.path || 'field';
    return res.status(409).json({
      status: 'error',
      message: `${field} already exists`,
      field,
    });
  }

  // Sequelize ForeignKeyConstraintError
  if (err instanceof ForeignKeyConstraintError) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid reference to related resource',
    });
  }

  // Sequelize DatabaseError
  if (err instanceof DatabaseError) {
    return res.status(500).json({
      status: 'error',
      message: 'Database error occurred',
    });
  }

  // Joi validation error
  if (err.isJoi) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation error',
      errors: err.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message,
      })),
    });
  }

  // Custom HTTP errors
  const { status = 500, message = 'Internal server error' } = err;
  
  res.status(status).json({
    status: 'error',
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export default errorHandler;
