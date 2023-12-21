const HtmlWebpackPlugin = require('html-webpack-plugin');
require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: false,
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: { injectType: 'singletonStyleTag' },
                    },
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new HtmlWebpackPlugin({
            filename: "main.html",
            template: "./src/core/templates/toFill/main.html",
          }),
          new HtmlWebpackPlugin({
            filename: "about-us.html",
            template: "./src/core/templates/toFill/about-us.html",
          }),
          new HtmlWebpackPlugin({
            filename: "bucket.html",
            template: "./src/core/templates/toFill/bucket.html",
          }),
],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};