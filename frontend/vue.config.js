 //const { defineConfig } = require("@vue/cli-service");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

//module.exports = defineConfig({
const config = {
  //transpileDependencies: true,
  // 개발 서버 설정
  devServer: {
    // 프록시 설정
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      "/pushwidgetapi": {
        // 프록시 요청을 보낼 서버의 주소
        target: "https://pushappintro.kma.go.kr/",
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        // 전역으로 사용할 라이브러리 세팅
        isMorpheus: [
          path.resolve(path.join(__dirname, "src/common/morpheus.native")),
          "isMorpheus",
        ],
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery",
        d3: "d3",
      }),
      new MomentLocalesPlugin({
        localesToKeep: ["ko"],
      }),
    ],
  },
};

module.exports = config;