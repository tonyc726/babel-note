/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const fs = require('fs');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    library: {
      name: '__use-babel-plugin-transform-runtime__',
      type: 'umd',
    },
    filename: '[name].js',
    path: process.env.NODE_ENV === 'analyze' ? path.resolve(__dirname, 'analyze') : path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              ...JSON.parse(fs.readFileSync(path.resolve(__dirname, '.babelrc'))),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization:
    process.env.NODE_ENV === 'analyze'
      ? {
          minimize: false,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                filename: 'vendors.js',
              },
            },
          },
        }
      : { minimize: false },
  plugins: process.env.NODE_ENV === 'analyze' ? [new BundleAnalyzerPlugin()] : [],
};
