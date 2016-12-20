const loaders = require('./loaders'),
    webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CompressionPlugin = require('compression-webpack-plugin');

var StringReplacePlugin = require("string-replace-webpack-plugin"),
    API_KEY = process.env.npm_config_apikey,
    path = require('path');

module.exports = {
    entry: {
        polyfills: './src/setup/polyfills.ts',
        app: './src/setup/prod.bootstrap.ts',
        css: './src/styles/styles.scss'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    devtool: false,
    debug: true,
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     comments: false,
        //     compress: {
        //         screw_ie8: true,
        //         dead_code: true
        //     },
        //     mangle: {
        //         screw_ie8: true,
        //         dead_code: true
        //     }
        // }),
        new StringReplacePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'app', 'css'].reverse()
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true,
            chunksSortMode: 'dependency'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new webpack.ProvidePlugin({
            Tether: 'tether',
            'window.Tether': 'tether'
        }),
        new CopyWebpackPlugin([{
            from: './src/styles/images',
            to: './images'
        },
        {
            from: './src/jload',
            to: './'
        }]),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        })
    ],
    module: {
        loaders: loaders.concat(
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        )
    }
};
