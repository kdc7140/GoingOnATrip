 //const { defineConfig } = require("@vue/cli-service");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

//chrome debug 사용
const useSourceMap = process.env.GENERATE_SOURCEMAP === "true";
const publicPath = process.env.PUBLIC_URL || "/";

//module.exports = defineConfig({
const config = {
  publicPath: publicPath,
  
  //build시 생성파일 frontend 폴더가 아닌 설정 경로로 설치
  outputDir: process.env.BUILD_PATH || "dist",

  //chrome 디버깅 사용하도록 처리
  productionSourceMap: useSourceMap,

  configureWebpack: {
    resolve: {
      //extensions: ['.js', '.ts'],
      alias: {
        "@": path.join(__dirname, "src/"),
      },
    },

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