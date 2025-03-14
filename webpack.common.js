const path = require('path');
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    app: './src/app.tsx',
    app404: './src/app404.tsx'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpe?g|gif|pdf|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/[hash][ext][query]'
      }
    }, {
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[name][ext][query]'
      }
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
            }
          }
        }
      ]
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new Dotenv()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [
      'node_modules'
    ]
  }
};
