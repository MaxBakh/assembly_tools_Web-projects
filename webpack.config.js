const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  resolve
} = require('path');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  // mode: 'development'
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js'
  },
  module: {
    rules: [{
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'img-optimize-loader',
          options: {
            compress: {
              mode: 'high',
              webp: true,
              gifsicle: true,
              disableOnDevelopment: false
            }
          }
        }]
      },
      {
        test: /\.(mp(3|4))$/i,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html')
    })
  ]

}