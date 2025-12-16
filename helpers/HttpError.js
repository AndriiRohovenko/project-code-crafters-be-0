const messageList = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
};

/**
 * Створює HTTP помилку з статусом та повідомленням
 * @param {number} status - HTTP статус код
 * @param {string} message - Повідомлення про помилку
 * @param {Object} details - Додаткові деталі помилки
 * @returns {Error} - Об'єкт помилки
 */
const HttpError = (status, message = messageList[status], details = null) => {
  const error = new Error(message);
  error.status = status;
  if (details) {
    error.details = details;
  }
  return error;
};

export default HttpError;
