import 'babel-polyfill';

import express from 'express';
import morgan from 'morgan';
import { routes } from './client/routes';
import { renderer } from './server-utils/renderer';
import createStore from './server-utils/serverStore';
import { loadData } from './server-utils/loadData';

const { init, logging, logger } = require('../config');

const { PORT } = process.env;

// initial application
init();

const app = express();

app.use(express.static('public'));
app.use(morgan(logging.server.format));

app.get('*', (req, res) => {
  const store = createStore();


  /* pageLoadDataPromises -> loadData
   * loadData is a util that finds all loadData methods attached to page level components
   * when it finds them it places the result which is a promise in an array
   */
  const pageLoadDataPromises = loadData(routes, req.path, store);


  /* resolve pageLoadDataPromises
   * resolve all Promises in pageLoadDataPromises which come from each page component
   * all must be resolved before rendering the application from the serverside
   */
  Promise.all(pageLoadDataPromises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(PORT, () => logger.log(`Listening on port http://localhost:${PORT}`));
