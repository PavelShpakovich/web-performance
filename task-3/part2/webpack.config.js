const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const modernConfig = require('./babel.modern.config');
const legacyConfig = require('./babel.legacy.config');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: process.env.BUILD_MODERN === 'true' ? 'modern.bundle.js' : 'legacy.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: process.env.BUILD_MODERN === 'true' ? modernConfig : legacyConfig,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new BundleAnalyzerPlugin(),
  ],
  mode: 'production',
};
