const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
//  compression-webpack-plugin 插件可以帮助我们进行gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const compress = new CompressionWebpackPlugin(
 {
   filename: info => {
     return `${info.path}.gz${info.query}`
   },
   algorithm: 'gzip', 
   threshold: 10240,
   test: new RegExp(
     '\\.(' +
     ['js'].join('|') +
     ')$'
   ),
   minRatio: 0.8,
   deleteOriginalAssets: false
 }
)

module.exports = {
  devServer: {
    host: '0.0.0.0',  // 解决在局域网下无法访问
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true
      }
    },
    before(app, server) { 
      app.get(/.*.(js)$/, (req, res, next) => { 
        req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        next();
      })
    }
  },
  configureWebpack: {
      plugins: [compress]
  },

  pages:{
    index:{
      entry:'examples/main.js',
      template:'public/index.html',
      filename:'index.html'
    },
  },
  // 提取css代码 因为js会动态的加载出css，所以js文件包会比较大，那么需要提取css代码到文件. 这里我们只需要将css配置一下
  css: {
      extract: true
  },
  // 配置
  chainWebpack:config=>{
    // 文件会变小
    config.optimization.minimize(true);
    // 分割代码,相应的文件中存入分割后的代码 加入以上代码后，分成了2个文件，最大的只有2.7M了，这样可以分成多个进行加载，可以达到最快化，但是一定要平衡文件大小的和分割出来的文件数量的平衡, 数量多了, 请求也会变慢的, 影响性能.可以根据项目的进行设置，具体可参考官方文档的详细说明
    config.optimization.splitChunks({
      cacheGroups: {
        common: {
          name: 'chunk-common', // 打包后的文件名
          chunks: 'initial', // 
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1,
          reuseExistingChunk: true
        },
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 2,
          reuseExistingChunk: true,
          enforce: true
        },
        '_vant': {
          name: 'chunk-element-plus',
          test: /[\\/]node_modules[\\/]_vant[\\/]/,
          chunks: 'initial',
          priority: 3,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    })
    // 用cdn方式引入
    config.externals({
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
    })
    // 配置别名
    config.resolve.alias
    .set('@', resolve('examples'))
    config.module.rule('js')
    .include
    .add(resolve('packages'))
    .end()
    .use('babel')
    .loader('babel-loader')
    .tap(options=>options)
  }
}