/*
 * @Author slashhuang
 * webpack项目配置
 */
var  plugins = require('./plugin_loader.js')['plugins'];
var  loaders = require('./plugin_loader.js')['loaders'];
var  path= require('path');
var  AddResolve = (obj)=>{
    var transObj = {};
    for(var key in obj){
        transObj[key] = path.resolve(__dirname,'../',obj[key])
    }
    return transObj;
};
//webpack配置文件
module.exports =  {
        context:path.resolve(__dirname,'../'),
        watch:process.env['NODE_ENV']!='prod',
        entry: {
            index:'./js/index/index.js',
            manage:"./js/manage/index.js",
            detail:"./js/detail/index.js",
            list:"./js/list/index.js",
            about:"./js/about/index.js",
            common: [
                'react',
                "react-dom",
                 "reset",
                'common_lib'
            ]
        },
        // debug: true,
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname,'../dist/'),
            filename: '[name].js',
            chunkFilename: '[name].min.js',
            publicPath: ''
        },
        resolve: {
            alias: AddResolve(require('./alias'))
        },
        plugins,
        module: {
            rules:loaders
        }
};





