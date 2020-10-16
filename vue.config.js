module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        views: "@/views"
      }
    }
  },
  devServer: {
    host: "192.168.1.103",
    port: 8081,
    https: false,
    open: false
  }
};
