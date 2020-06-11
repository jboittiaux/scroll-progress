const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        publicPath: 'public/',
        filename: "scroll-progress.js",
        chunkFilename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'scroll-progress.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            {
                test: /.css$/i,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: path.resolve(__dirname, 'public', 'dist'),
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                ],
            }
        ],
    },
};

module.exports = config;
