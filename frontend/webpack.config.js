const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const environments = {
    development: {
        local: 'development.local',
        testing: 'development.testing',
        prestable: 'development.prestable',
    },
    unstable: 'unstable',
    testing: 'testing',
    prestable: 'prestable',
    production: 'production',
};

const modes = {
    development: 'development',
    production: 'production',
};

const getWebPackMode = (APP_ENV) => {
    switch (APP_ENV) {
        case environments.testing:
        case environments.development.testing:
        case environments.development.production:
        case environments.prestable:
        case environments.production:
            return modes.production;
        default:
            return modes.development;
    }
};

module.exports = env => {
    const mode = getWebPackMode(env.APP_ENV);
    console.log(`Mode: ${mode}`);

    return {
        entry: './src/index.tsx',
        mode,
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                src: path.resolve(__dirname, 'src/'),
                components: path.resolve(__dirname, 'src/components'),
                pages: path.resolve(__dirname, 'src/pages'),
                data: path.resolve(__dirname, 'src/data'),
                assets: path.resolve(__dirname, 'src/assets/'),
                network: path.resolve(__dirname, 'src/network/'),
                services: path.resolve(__dirname, 'src/services/'),
                configs: path.resolve(__dirname, 'src/configs/'),
                enums: path.resolve(__dirname, 'src/configs/enums'),
            },
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 60010,
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.ts|.tsx$/,
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
                    test: /\.scss/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                        },
                        {loader: 'postcss-loader'},
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                // favicon: './src/assets/images/favicon.ico',
            }),
            new DefinePlugin({
                'process.env.APP_ENV': JSON.stringify(env.APP_ENV),
            }),
        ],
    }
};