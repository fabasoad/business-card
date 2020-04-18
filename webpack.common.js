const path = require('path');

module.exports = {
  entry: './src/app.tsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpe?g|gif|pdf|svg)$/i,
      loader: 'file-loader'
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js','.ts','.tsx']
  }
};