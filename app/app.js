import Koa from 'koa';
import mongooseConnector from './connectors/connectors';
import initHandlers from './handlers/handlers';
import modules from './modules/modules';

mongooseConnector();

const app = new Koa();

initHandlers(app);
app.use(modules);

app.use(async (ctx) => {
  ctx.body = '<h1>Summary</h1>';
});

export default app;
