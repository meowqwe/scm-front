const proxyObj = {}

proxyObj['/'] = {
  ws: false,
  target: 'http://localhost:8888',
  // 发送请求的host会被设置成target
  changeOrigin: true,
  // 补充协议请求地址
  pathRewrite: {
    '^/': '/'
  }
}

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: proxyObj
  }
}
