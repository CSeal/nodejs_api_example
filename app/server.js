import app from './app';
import { PORT, MONGO_URI } from './config';


const server = app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(MONGO_URI);
  console.log(`Server running on port ${PORT}`);
});
export default server;
