module.exports = {
  devServer: {
    open: true,  // 是否自动打开网页
    port: 8080,    // 端口号
    proxy: {
      '/hehe': {
        target: 'https://h5.ele.me', //目标服务器
        changeOrigin: true,
        pathRewrite: {
          '^/hehe': ''
        }
      }
    }
  }
}