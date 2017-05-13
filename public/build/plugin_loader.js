// webpack 插件配置
const path = require('path'),
    webpack = require("webpack"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackNotifierPlugin = require('webpack-notifier');

exports.plugins =[
            new webpack.ProvidePlugin({
                $: 'jquery'
            }),
            new ExtractTextPlugin({
                filename: "[name].css",
                disable: false,
                allChunks: true
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                minChunks: Infinity
            })
];
if(process.env['NODE_ENV']=='prd'){
    exports.plugins.push(
        new WebpackNotifierPlugin({
                title: 'Webpack 编译成功',
                contentImage: path.resolve(__dirname, '../img/avatar.jpeg'),
                alwaysNotify: true
            })
    )
}
exports.loaders = [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:{
                        loader:'css-loader',
                        options: {
                           sourceMap: true
                        }
                    }
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader',{
                        loader:'less-loader',
                        options: {
                           sourceMap: true
                        }
                    }]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader',{
                        loader:'sass-loader',
                        options: {
                           sourceMap: true
                        }
                    }]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                use: {
                    loader:'file-loader',
                    options:{
                        name:'[name]_[sha512:hash:base64:7].[ext]'
                    }
                }
            },
            {
                test: /\.html/,
                use:{
                    loader:"html-loader",
                    options:{
                        minimize: false,
                        attrs:false
                    }
                }
            }
];
