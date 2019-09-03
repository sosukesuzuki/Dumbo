import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';

const MODE: 'development' | 'production' =
    (process.env.NODE_ENV as 'production' | 'development') || 'development';
const DEV = MODE === 'development';

const copyRules = [
    {
        from: __dirname + '/src/index.html',
        to: __dirname + '/dist/index.html',
    },
];

const configuration: webpack.Configuration = {
    target: 'electron-renderer',
    mode: MODE,
    devtool: DEV ? 'inline-source-map' : 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader/url',
                    },
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    plugins: [new CopyPlugin(copyRules)],
};

export default configuration;
