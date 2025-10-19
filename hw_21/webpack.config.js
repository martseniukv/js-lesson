import path from 'path';
import {fileURLToPath} from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
    mode: 'development',
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        hot: false,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    "targets": "> 0.25%, not dead"
                                }
                            ]
                        ]
                    }
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                    plugins: [
                        ['mozjpeg', { quality: 75 }],
                        ['pngquant', { quality: [0.6, 0.8] }],
                    ],
                },
            },
        }),
    ],
}