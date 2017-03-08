const helpers           = require('./../helpers');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'main': './src/main.ts'
  },

  target: 'electron',

  node: {
    __dirname: false
  },

  output: {
    path: helpers.root('build'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('src', 'tsconfig.json') }
          }
        ]
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/package.json'
    }])
  ]
};
