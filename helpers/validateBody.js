/**
 * Middleware для валідації req.body через Joi схему
 * @param {Object} schema - Joi схема для валідації
 * @returns {Function} - Express middleware
 */
const validateBody = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { 
      abortEarly: false,
      stripUnknown: true 
    });
    
    if (error) {
      error.isJoi = true;
      return next(error);
    }
    
    // Замінюємо req.body на валідовані дані
    req.body = value;
    next();
  };
};

/**
 * Middleware для валідації req.query через Joi схему
 * @param {Object} schema - Joi схема для валідації
 * @returns {Function} - Express middleware
 */
export const validateQuery = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.query, { 
      abortEarly: false,
      stripUnknown: true 
    });
    
    if (error) {
      error.isJoi = true;
      return next(error);
    }
    
    // Create new object with validated values
    Object.assign(req.query, value);
    next();
  };
};

/**
 * Middleware для валідації req.params через Joi схему
 * @param {Object} schema - Joi схема для валідації
 * @returns {Function} - Express middleware
 */
export const validateParams = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.params, { 
      abortEarly: false 
    });
    
    if (error) {
      error.isJoi = true;
      return next(error);
    }
    
    req.params = value;
    next();
  };
};

export default validateBody;
