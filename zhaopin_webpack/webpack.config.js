var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'dist/js');

var config = {
  //入口文件
  //可以以数组的形式配置入口文件，也可以单独配置一个entry:{ index: './lib/js/index.js'},
  entry: [
    './lib/js/amazeui.min.js',
    './lib/js/common.js',
    './lib/js/index.js'
  ],
  output: {
    path: buildPath,    //编译后的文件路径
    filename: 'index.webpack.js'
  },
  module: {
    //Loaders
    loaders: [
      // 这里暂时用不上，所以就全部注释了
      // .css 文件使用 style-loader 和 css-loader 来处理
      // { test: /\.css$/, loader: 'style-loader!css-loader' },
      // { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      //.js 文件使用 babel 来编译处理
      // { test: /\.js$/, loader: 'babel' },
      //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
      ]

  },
};

module.exports = config;