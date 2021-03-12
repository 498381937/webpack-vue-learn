const path = require('path');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: path.resolve(__dirname,'./src/index.js'),
    output:{
        filename:"[name].js",
        path: path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }],
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use: ['vue-style-loader','css-loader',{
                    loader:'postcss-loader',
                    options:{
                        plugins:[autoprefixer()]
                    }
                }]
            },
            {
                test:/\.scss$/,
                use:['vue-style-loader','css-loader',{
                    loader:'postcss-loader',
                    options:{
                        plugins:[autoprefixer()]
                    }
                },'sass-loader']
            }
        ]
    },
    devServer:{
        port:3000,
        hot:true,
        contentBase:'./dist',
        open:true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./public/index.html'),
            filename:'index.html'
        }),
        new vueLoaderPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ]
}