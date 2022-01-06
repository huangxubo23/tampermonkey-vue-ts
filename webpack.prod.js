const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");
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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(
      // {
      //   terserOptions: {
      //     output: {
      //       ascii_only: true // 中文字符转unicode
      //     }
      //   }
      // }
    )],
  },
  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   // test: /\.xxx$/, // may apply this only for some modules
    //   options: {
    //     ignoreMomentLocale: true
    //   }
    // }),
    new WebpackObfuscator({
      domainLock: ['we.taobao.com', 'liveplatform.taobao.com', 'alimama.com'], // 允许仅在特定域和/或子域上运行混淆的源代码。这使得某人很难复制和粘贴您的源代码并在其他地方运行它。
      forceTransformStrings: ['taobao'],
      disableConsoleOutput: true, // 默认值：false，禁用console
      unicodeEscapeSequence: true,  // 默认值：false
      // rotateStringArray: true, // 默认值：true
      // compact: true, // 默认值：true，紧凑的代码输出一行
      // ignoreRequireImports: false, // 默认值：false，防止混淆require进口
      // numbersToExpressions: true, // 默认值：false，允许将数字转换为表达式 
      // optionsPreset: 'default', // 默认值：default，允许设置选项预设，
      // reservedNames: [], // string[]，默认值：[]，禁用标识符（变量）混淆，这些标识符与通过的RegExp模式匹配
      // reservedStrings: [], // string[]，默认值：[]，禁用字符串文字的转换，该文字与通过的RegExp模式匹配。
      // selfDefending: false,
      // target: 'browser', // 允许为混淆代码设置目标环境
      // transformObjectKeys: true, // 默认值：false，启用对象键的转换
    })
  ]
})
