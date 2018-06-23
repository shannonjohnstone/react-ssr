const config = (configOverride = {}) => ({
  init: () => {
    if (process.env.NODE_ENV !== 'production') {
      require('dotenv').config({ path: './config/.env.dev'}) // eslint-disable-line
    }
  },
  logging: {
    server: {
      format: 'common',
    },
  },
  logger: console,
  ...configOverride,
});

module.exports = config(require('./config-override'));
