import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { html } from './base-html-markup';

import Home from './client/components/Home';

const { init, logging, logger } = require('../config');

const { PORT } = process.env;

init();

const app = express();

app.use(express.static('public'));
app.use(morgan(logging.server.format));

app.get('/', (req, res) => {
  res.send(html(renderToString(<Home />))); // eslint-disable-line
});

app.listen(PORT, () => logger.log(`Listening on port http://localhost:${PORT}`));
