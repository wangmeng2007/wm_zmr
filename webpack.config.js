const path = require('path')

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/index.js') // 以src/index.js为项目入口
    },
    output: {
        filename: 'bundle.js',   //打包后的名称
        path: path.resolve(__dirname, 'dist')  //打包后的输出到该目录下
    }
}