const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const pathResolve = (dir) =>{
  return path.resolve(__dirname, '..', dir)
}

module.exports = () => {
  const entryFile = process.env.TAMPERMONKEY_ENTRY_FILE
  return {
    entry: {
      app: './src/main.ts',
    },
    output: {
      filename: entryFile,
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // 'vue$': 'vue/dist/vue.esm.js'
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              'scss': [
                'style-loader',
                'css-loader',
                'sass-loader'
              ]
            }
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        },
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        __APP_NAME__: JSON.stringify(process.env.TAMPERMONKEY_APP_NAME),
        __APP_ENVIRONMENT__: JSON.stringify(process.env.TAMPERMONKEY_APP_ENVIRONMENT),
        __APP_VERSION__: JSON.stringify(require('./package.json').version)
      })
    ],
  }
}
