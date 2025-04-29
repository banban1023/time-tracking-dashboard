const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/time-tracking-dashboard/'
    : '/',
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/style/common.less";`
      }
    }
  }
})
