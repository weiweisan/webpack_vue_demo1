const VueLoaderPlugin = require('vue-loader/lib/plugin') // 配置升级之后的vue-loader
const HtmlWebpackPlugin = require('html-webpack-plugin') // 配置html的loader

module.exports = {
    mode: 'development', // 设置这个模式,代码不会压缩
    entry: './src/main.js', // 配置入口
    // 开发 阶段,暂时不需要配置出口 output
    // 配置loader 
    module: {
        
        rules: [
            // 配置vue-loader
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            // 配置css-loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 配置图片 url-loader
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            // 配置less
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    plugins: [
        // vue-loader升级之后要配的插件
        new VueLoaderPlugin(),
        // 把开发阶段生成的bundle.js注入到public/index中去
        new HtmlWebpackPlugin({ //要告诉它要配置的位置选项
            template: './public/index.html'
        })
    ]

};