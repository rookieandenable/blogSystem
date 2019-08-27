// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        '/api': {
            target: 'http://localhost:3000/api/', //对应自己的接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }