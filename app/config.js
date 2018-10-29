import config from 'config';
import dotenv from 'dotenv';
import env from './utils/env';
import envs from './constants/envs';

dotenv.config();
if (!envs[env]) {
  throw Error(`Unknown env ${env}`);
}

const PORT = process.env.PORT || config.get('port');
const MONGO_URI = process.env.MONGO_URI || config.get('mongo.uri');
const MONGO_BASENAME = process.env.MONGO_BASENAME || config.get('mongo.baseName');

export {
  PORT,
  MONGO_URI,
  MONGO_BASENAME,
};
