const express = require('express');
const logger = require('morgan');
const config = require('./config');

config.init();
const { PORT } = process.env;

const app = express();
app.use(logger(config.logging.server.format));

app.get('/', (req, res) => {

});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
