const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const CriticalCssPlugin = require('html-critical-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(scss)$/,
        use: [miniCss.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new miniCss({
      filename: 'style.css',
    }),
    new CriticalCssPlugin({
      base: path.join(path.resolve(__dirname), 'dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      extract: true,
      dimensions: [
        {
          height: 320,
          width: 568,
        },
        {
          height: 820,
          width: 1180,
        },
        {
          height: 1400,
          width: 1098,
        },
      ],
    }),
  ],
};
