var path = require('path')
var node_modules = path.resolve(__dirname, 'node_modules')
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js')

config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.jsx')],
    resolve: {
        alias: {
          'react': pathToReact
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        }],
        noParse: [pathToReact]
    }
}

module.exports = config