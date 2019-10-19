const path = require('path')
const constant = require('../config/constant')

module.exports = ({ config }) => {
  config.module.rules = [
    {
      test: /(node_modules\/.+)\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          query: {
            importLoaders: 1,
            sourceMap: true
          }
        }
      ]
    },
    {
      test: /\.css$/,
      exclude: /(node_modules\/.+)\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: constant.CSS_MODULE_LOCAL_IDENT_NAME
          }
        }
      ]
    },
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader'
        }
      ]
    }
  ]

  config.resolve.extensions.push('.ts', '.tsx')

  config.resolve.alias = {
    '@components': path.resolve(__dirname, '../src', 'components')
  }

  return config
}
