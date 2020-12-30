const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "index_bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
        }),
        new CleanWebpackPlugin(),
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false})
    ]
};