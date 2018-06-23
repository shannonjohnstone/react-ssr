const config = (configOverride = {}) => {
  return {
    init: () => {
      if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config({ path: './config/.env.dev'})
      }
    },
    logging: {
      server: {
        format: 'common',
      }
    },
    logger: console,
    ...configOverride
  }
}

module.exports = config(require('./config-override'))
