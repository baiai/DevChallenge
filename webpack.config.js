const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );
// const AutoDllPlugin = require('autodll-webpack-plugin'); 不起作用，分开了，但是没有注入到html模板中

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          {
            loader: 'css-loader',
            options: {
              modules: {
                // css module 的基础配置
                mode: 'local',
                // 生产环境可以用[hash:base64]，类名会更短些
                localIdentName: '[local]--[hash:base64:5]'
              },
            },
          },
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true, // will inject the main bundle to index.html
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin()
  ],
};
