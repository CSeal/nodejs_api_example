import mongooseConnector from './mongoose-connector';
import { MONGO_URI, MONGO_BASENAME } from '../config';
import { IS_DEV } from '../utils/env';
import server from '../server';

const connectionInit = async () => {
  try {
    await mongooseConnector(MONGO_URI, MONGO_BASENAME);
  } catch (err) {
    server.close();
    console.log(err.message);
    console.log(IS_DEV);
    if (IS_DEV) {
      console.log(err.stack);
    }
  }
};

export {
  mongooseConnector,
};

export default connectionInit;
