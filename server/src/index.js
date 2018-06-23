const express = require('express');
const morgan = require('morgan');
const React = require('react');
const { renderToString } = require('react-dom/server');

const Home = require('./client/components/Home').default;

const { init, logging, logger } = require('../config');

const { PORT } = process.env;

init();

const app = express();
app.use(morgan(logging.server.format));

app.get('/', (req, res) => {
  const content = renderToString(<Home />); // eslint-disable-line

  res.send(content);
});

app.listen(PORT, () => logger.log(`Listening on port http://localhost:${PORT}`));
