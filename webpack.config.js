const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 使用 extract text webpack plugin
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var extractPlugin = new ExtractTextPlugin({
    filename: 'css/style.css' // scss轉css後另存的目標檔名與路徑
 });

module.exports = {
    entry: [
        './src/js/index.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, 
            {
                test: /\.css$/, // 針對所有.css 的檔案作預處理，這邊是用 regular express 的格式
                use: [
                    'style-loader',  // 這個會先執行
                    'css-loader' // 這個會後執行 (順序很重要)
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({ //利用 extractPlugin 實例裡的 extract 來建立 Loader
                    use: [
                        'css-loader', 
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
         extractPlugin,
         new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html' // 指定HTML模板的路徑
        })
    ]
}