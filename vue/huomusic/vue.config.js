module.exports = {
  devServer: {
    open: true,  // 是否自动打开网页
    port: 8080,    // 端口号
    proxy: {
      '/music': {
        target: 'http://ustbhuangyi.com', //目标服务器
        changeOrigin: true,
        pathRewrite: {
          '^/music': ''
        }
      },
      '/haha':{
        target: 'https://c.y.qq.com', //目标服务器
        changeOrigin: true,
        pathRewrite: {
          '^/haha': ''
        }
      }
    }
  }
}