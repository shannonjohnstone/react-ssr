const path = require('path');

module.exports = {
  // tell webpack we are building for node
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    // tell webpack which files to run over
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browser: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
}
