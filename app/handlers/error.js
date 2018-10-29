const handler = async (ctx, next) => {
  try {
    await next();
  } catch ({ status = 500, message = 'Server error', name, errors, statusCode}) {
    if (name === 'validationError') {
      ctx.status = 400;
      ctx.body = {
        errors: Object.value(errors).reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {}),
      };
    } else {
      ctx.status = statusCode || status;
      ctx.body = {status, message};
    }
  }
};

export default handler;
