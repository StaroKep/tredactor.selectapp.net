const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/** Common config */
const { entry, resolve, output, configModule, htmlTemplate } = require('./common');

console.log(`
    ----------
    Mode: production
    ----------
`);

module.exports = env => ({
    mode: 'production',
    entry,
    resolve,
    output,
    module: configModule,
    plugins: [
        new HtmlWebpackPlugin({
            template: htmlTemplate,
            // favicon: './src/assets/images/favicon.ico',
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env.APP_ENV),
            'process.env.APP_ENV': JSON.stringify(env.APP_ENV),
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
});

// module.exports = env => {
//     return {
//         // ...
//         devtool: isProduction ? false : 'source-map',
//         module: {
//             rules: [
//                 {
//                     test: /\.ts|.tsx$/,
//                     exclude: /node_modules/,
//                     use: [
//                         {
//                             loader: 'babel-loader',
//                         },
//                         {
//                             loader: 'ts-loader',
//                             options: {
//                                 transpileOnly: true,
//                             },
//                         },
//                     ],
//                 },
//                 {
//                     test: /\.scss/,
//                     use: [
//                         'style-loader',
//                         {
//                             loader: 'css-loader',
//                             options: {
//                                 sourceMap: !isProduction,
//                                 modules: true,
//                                 importLoaders: 1,
//                                 localIdentName: '[name]__[local]___[hash:base64:5]',
//                             },
//                         },
//                         { loader: 'postcss-loader' },
//                     ],
//                 },
//                 {
//                     test: /\.(png|jpg|gif)$/i,
//                     use: [
//                         {
//                             loader: 'file-loader',
//                             options: {
//                                 esModule: false,
//                             },
//                         },
//                     ],
//                 },
//             ],
//         },
//         plugins: [
//             new HtmlWebpackPlugin({
//                 template: './src/index.html',
//                 // favicon: './src/assets/images/favicon.ico',
//             }),
//             new DefinePlugin({
//                 'process.env.NODE_ENV': JSON.stringify(env.APP_ENV),
//                 'process.env.APP_ENV': JSON.stringify(env.APP_ENV),
//             }),
//             new BundleAnalyzerPlugin(),
//         ],
//     };
// };
