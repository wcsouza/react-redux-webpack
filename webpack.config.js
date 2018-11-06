const webpack = require('webpack');

const webpackConfig = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './dist.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: ["transform-object-rest-spread", "transform-class-properties"]
                    }
                },
                exclude: '/node_modules/',
            }
        ]
    }
}

module.exports = webpackConfig;