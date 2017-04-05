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
        transObj[key] = path.resolve(process.cwd(),obj[key])
    }
    return transObj;
};
//webpack配置文件
module.exports =  {
        watch: true,
        entry: {
            index:'./js/index.js',
            common: [
                'jquery',
                "reset"
            ]
        },
        // debug: true,
        devtool: 'source-map',
        output: {
            path: path.resolve(process.cwd(),'dist/'),
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