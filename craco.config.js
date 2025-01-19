const path = require('path')
const CracoLessPlugin = require("craco-less");

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  
  // 配置样式加载器选项
  style: {
    modules: {
      localIdentName: '[local]_[hash:base64:5]',
    },
    css: {
      loaderOptions: {
        sourceMap: true,
      },
    },
    sass: {
      loaderOptions: {
        sourceMap: true,
      },
    },
    less: {
      loaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  // Webpack 配置
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")
    }
  },
  babel: {
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
  }
}


