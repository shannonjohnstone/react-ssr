/* config util
 * config is a util that sets up any initial configuration
 * root level values or methods
 */

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
