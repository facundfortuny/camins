module.exports = [
    {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
    },
    {
        test: /\.css$/,
        loader: 'style!css'
    },
    {
        test: /\.scss$/,
        loader: 'style!css!sass'
    },
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
    },
    {
        test: '\.jpg$',
        include: /src/,
        loader: 'file'
    },
    {
        include: /src/,
        test: '\.png$',
        loader: 'url'
    },
    {
      test: /\.(html|css)$/,
      loader: 'raw-loader'
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
];
