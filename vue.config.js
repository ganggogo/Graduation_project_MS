module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        // "@":"src"  这个默认已经配置过，不需要再配
        "assets":"@/assets",
        "common":"@/common",
        "components":"@/components",
        "views":"@/views",
        "network":"@/network",
      }
    }
  }
}
