const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  css: {
    loaderOptions: {
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      sass: {
        additionalData: `@import '@/assets/styles/variables.scss';`
        // additionalData: (content, loaderContext) => {
        //   const { resourcePath } = loaderContext
        //   if (resourcePath.endsWith('variables.module.scss')) return content
        //   return `@import "@/assets/styles/variables.module.scss"; ${content}`
        // }
      }
    }
  },
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true, // 是否支持websocket
    //     changeOrigin: true // 是否跨域
    //   },
    // },
  },
})
