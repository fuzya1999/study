const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin/typings');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack/dist');
const entry = require('../../webpack4/webpack.config/entry_webpack.js');
const copyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode:'development',
    entry: entry,
    // entry:{
    //     index: './src/index.js',
    //     index2: './src/index2.js'
    // },
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js',
        publicPath: 'http://127.0.0.1:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //use: ['style-loader','css-loader']             //css在.js文件里。
                use:ExtractTextPlugin.extract({           //css单独分离
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importLoaders:1}
                    },"postcss-loader"]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath: 'img/',
                        esModule: false,
                    }
                }]
            },
            {
                    test: /\.(htm|html)$/i,
                    loader: 'html-withimg-loader',
            },
            {
                test: /\.scss$/,
                // use:['style-loader','css-loader','sass-loader']
                use:ExtractTextPlugin.extract({           //css单独分离
                    fallback:"style-loader",
                    use:["css-loader",'sass-loader']
                })
            },
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env','@babel/preset-react'
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            chunks:['index'],
            title:'index1 -- title',
            minify:{
                removeAttributeQuotes:true,
            },
            hash:true,
            template:'./src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename:'index2.html',
            chunks:['index2'],
            title:'index2 -- title',
            minify:{
                removeAttributeQuotes:true,
            },
            hash:true,
            template:'./src/index2.html'
        }),
        new ExtractTextPlugin('./css/index.css'),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
          }),
        new webpack.BannerPlugin('周震南最帅'),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new copyWebpackPlugin({
            patterns: [
                {
                from: __dirname + '/src/public',
                to: './public',
                }
            ]
        })

    ],
    devServer:{
        contentBase:path.resolve(__dirname,'./dist'),
        host:'127.0.0.1',
        port:'8081',
        compress:true,
        open:true,
        hot: true,
    },

}
