const notFoundHandler = (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
    path: `${req.method} ${req.url}`,
  });
};

export default notFoundHandler;
