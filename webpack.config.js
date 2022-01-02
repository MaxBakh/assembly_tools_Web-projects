const HtmlWebpackPlugin = require('html-webpack-plugin'),
  {
    resolve,
    dirname
  } = require('path'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './js/index.js',
  // mode: 'development',
  output: {
    filename: 'main.[contenthash].js',
    path: resolve(__dirname, 'webpackTest')
  },
  module: {
    rules: [{
        test: /\.(png|jpeg|gif|mp3|wav|avi|mp4|wmv)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
    }),
    // new BundleAnalyzerPlugin()
  ]
}