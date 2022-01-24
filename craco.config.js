const CracoLessPlugin = require('craco-less')
module.exports = {
  plugins: [
    {  //详情可以去官网查看
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    }],
  babel: {  //实现按需加载
    plugins: [
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": true //设置为true即是less  "css"是css
        }
      ]
    ]
  },
}