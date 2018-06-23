const express = require('express');
const logger = require('morgan');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;

const Home = require('./client/components/Home').default;

const { init, logging } = require('../config');

const { PORT } = process.env;

init();

const app = express();
app.use(logger(logging.server.format));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
