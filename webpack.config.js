const webpack = require('webpack')
const path = require('path')
const VueLoader = require("vue-loader");

module.exports = {
    mode: 'development',
    entry:  path.resolve("./src/js/app.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/main.js'
    },
    devServer:{
        contentBase: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                type: 'asset/resource',
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.jsx', '.vue', '.json']

    },
    plugins: [
        new VueLoader.VueLoaderPlugin(),
    ]
}

