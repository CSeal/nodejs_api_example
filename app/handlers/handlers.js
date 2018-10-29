import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import errorHandler from '../handlers/error';
import { IS_DEV } from '../utils/env';

const handler = (app) => {
  if (IS_DEV) {
    app.use(logger());
  }
  app.use(errorHandler);
  app.use(bodyParser());
};

export default handler;
