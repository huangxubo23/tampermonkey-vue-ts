const { merge } = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

const common = require('./webpack.common')

module.exports = merge(common(), {
  mode: 'production',
  externals: {
    // use @require in header to import vue
    vue: 'Vue',
    'element-ui': 'ELEMENT',
    axios: 'axios'
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     // we specify a custom UglifyJsPlugin here to get source maps in production
  //     new UglifyJsPlugin(
  //       {
  //         cache: true,
  //         parallel: true,
  //         uglifyOptions: {
  //           compress: true,
  //           mangle: true,
  //           keep_fnames: false
  //         },
  //         extractComments: true,
  //         sourceMap: false
  //       }
  //     )
  //   ]
  // },
  // plugins: [
  //   new WebpackObfuscator({
  //     rotateStringArray: true
  //   }, ['abc.js'])
  // ]
})
