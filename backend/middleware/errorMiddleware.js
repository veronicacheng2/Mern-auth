const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl} `);
  res.status(404);
  next(error);
};

// Express will recognize this as custom error middleware when you pass in 4 params
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // mongoose error of trying to find an object by objectId but that objectId does not exist
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
