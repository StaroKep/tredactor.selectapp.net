const path = require('path');
const root = path.resolve(__dirname, '../');

module.exports.root = root;
module.exports.entry = path.resolve(root, 'src/index.tsx');
module.exports.htmlTemplate = path.resolve(root, 'src/index.html');

module.exports.resolve = {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
        common: path.resolve(root, '../common/'),
        backend: path.resolve(root, '../backend/src/'),
        src: path.resolve(root, 'src/'),
        components: path.resolve(root, 'src/components'),
        pages: path.resolve(root, 'src/pages'),
        data: path.resolve(root, 'src/data'),
        assets: path.resolve(root, 'src/assets/'),
        network: path.resolve(root, 'src/network/'),
        services: path.resolve(root, 'src/services/'),
        configs: path.resolve(root, 'src/configs/'),
        enums: path.resolve(root, 'src/configs/enums'),
        icons: path.resolve(root, 'src/icons'),
    },
};

module.exports.output = {
    filename: 'main.js',
    path: path.resolve(root, 'dist'),
};

module.exports.configModule = {
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
                { loader: 'postcss-loader' },
            ],
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                    },
                },
            ],
        },
    ],
};
