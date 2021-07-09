const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin')

module.exports = {
  webpack: {
    plugins: {
      add: [new DynamicCdnWebpackPlugin()],
    },
  },
}
