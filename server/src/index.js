import express from 'express';
import morgan from 'morgan';
import { renderer } from './server-utils/renderer';

const { init, logging, logger } = require('../config');

const { PORT } = process.env;

init();

const app = express();

app.use(express.static('public'));
app.use(morgan(logging.server.format));

app.get('*', (req, res) => res.send(renderer(req)));

app.listen(PORT, () => logger.log(`Listening on port http://localhost:${PORT}`));
