const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [path.resolve(__dirname, '../src/index.js')],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'index.bundle.js',
        publicPath: '/',
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                resolve: {
                    extensions: [".js", ".jsx"]
                },
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: ['file-loader'],
            },
        ],
    },
};

module.exports = config;