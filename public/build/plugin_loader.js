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
            new webpack.optimize.DedupePlugin(),
            new WebpackNotifierPlugin({
                title: 'Webpack 编译成功',
                contentImage: path.resolve(process.cwd(), './img/logo.jpg'),
                alwaysNotify: true
            }),
            new ExtractTextPlugin("[name].css"),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                minChunks: Infinity
            })
];

exports.loaders = [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader')
            },
            {
                test: /\.rcss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&sourceMap&-convertValues!sass-loader?sourceMap')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-convertValues!less-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&-convertValues!sass-loader?sourceMap')
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                loader: "file-loader?name=[name]_[sha512:hash:base64:7].[ext]"
            },
            {
                test: /\.html/,
                loader: "html-loader?" + JSON.stringify({
                    minimize: false,
                    attrs:false
                })
            },
            {
                 test: /\.json$/,
                 loader: "json"
            }
];
