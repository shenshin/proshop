const notFound = (req, res, next) => {
  const error = new Error(`Not Found ${req.originalUrl}`);
  res.status(404);
  next(error);
}
const errorHandler = (err, req, res, next) => {
  let { statusCode } = res;
  if (statusCode === 200) statusCode = 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
}
export { notFound, errorHandler };
