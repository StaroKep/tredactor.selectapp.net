const path = require('path');

module.exports = {
    entry: './src/index.ts',
    target: 'node',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            common: path.resolve(__dirname, '../common/'),
            src: path.resolve(__dirname, 'src'),
        }
    },
    output: {
        filename: 'mailingService.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            }
        ],
    },
};
