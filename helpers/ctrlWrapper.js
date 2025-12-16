/**
 * Wrapper для async контролерів, який автоматично передає помилки в next()
 * Замість try-catch в кожному контролері
 * @param {Function} fn - Async функція контролера
 * @returns {Function} - Express middleware з обробкою помилок
 */
export const ctrlWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default ctrlWrapper;
