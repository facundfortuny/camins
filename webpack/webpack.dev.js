const loaders = require('./loaders'),
    webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

var StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/setup/polyfills.ts',
        'css': './src/styles/styles.scss',
        'vendor': [
            '@ngrx/core',
            '@ngrx/store',
            '@ngrx/store-devtools',
            '@ngrx/store-log-monitor',
            '@angular/common',
            '@angular/compiler',
            '@angular/forms',
            '@angular/core',
            '@angular/router',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            'lodash/flatMap',
            'lodash/groupBy',
            'lodash/orderBy',
            'lodash/flatten',
            'rxjs/Observable',
            'rxjs/Subject',
            'rxjs/BehaviorSubject',
            'rxjs/ReplaySubject',
            'rxjs/Subscription',
            'rxjs/add/operator/map',
            'rxjs/add/operator/finally',
            'rxjs/add/operator/filter',
            'rxjs/add/operator/take',
            'rxjs/add/operator/mergeMap',
            'rxjs/add/operator/distinctUntilChanged',
            'rxjs/add/operator/retryWhen',
            'rxjs/add/operator/debounceTime',
            'rxjs/add/operator/do',
            'rxjs/add/operator/switchMap',
            'rxjs/add/observable/combineLatest',
            'angular2-clipboard/index'
        ],
        'app': './src/setup/dev.bootstrap.ts'
    },
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        keepalive: true,
        port: 9000,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js']
    },
    devtool: 'eval',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),
        new StringReplacePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'app', 'css', 'vendor'].reverse()
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('dev')
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
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        )
    ],
    module: {
        loaders: loaders
    }
};
