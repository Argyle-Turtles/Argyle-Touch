/* eslint-disable */
var path = require('path');

module.exports = {
  entry: {
    client: './src/client/app.js',
  },

  output: {
    path: path.resolve('build'),
    filename: 'app.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/client'),
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
