const path = require('path');

module.exports = {
    entry: './src/index.ts',
    target: 'node',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            src: path.resolve(__dirname, 'src'),
            constants: path.resolve(__dirname, 'src/constants'),
            db: path.resolve(__dirname, 'src/db'),
            handlers: path.resolve(__dirname, 'src/handlers'),
        },
    },
    output: {
        filename: 'backendProductionBundle.js',
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
            },
            {
                test: /\.(html)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};
