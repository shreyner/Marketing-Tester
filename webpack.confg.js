const webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:'./client/app/app.js',

    output:{
        path: 'public/',
        filename:'bundle.js'
    },

    stats:{
        color:true,
        modules:true,
        reasons:true
    },

    module:{
        loaders:[
            {test:/\.js$/, loader:'babel?presets[]=es2015'},
            {test:/\.html$/, loader:'raw'},
            {test:/\.css$/, loader:'style!css'},
            {test:/\.sass$/, loader:'style!css!sass?indentedSyntax'},
            {test:/\.json$/, loader:'json'},
            {test: /\.(jpg|png|ttf|eot|svg|woff|woff2)$/, loader: "file?name=lib/[hash].[ext]" }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./client/index.html"
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
}