import mongoose from 'mongoose';

mongoose.Promise = Promise;

const connect = (mongoUri, baseName) => {
  if (!mongoUri) {
    throw Error('mongo uri is not defined');
  }
  if (!baseName) {
    throw Error('mongo base name`s is not defined');
  }
  mongoUri = 'mohgodb://kjiojfgiojdifj';
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      dbName: baseName,
    })
        .then((mongodb) => {
          resolve(mongodb);
          console.log('Mongo connected');
        })
        .catch((err) => {
          reject( new Error(err));
        });
  });
};

export default connect;
