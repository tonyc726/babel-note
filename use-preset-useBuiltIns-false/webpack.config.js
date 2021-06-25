/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    library: {
      name: '__babel_use-preset-usebuiltins-false__',
      type: 'umd',
    },
    filename: 'main.js',
    chunkFilename: '[name]_[id].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimize: false,
  },
};
