var path = require('path')
module.exports = {
    entry: "./src/entry.js",
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            //{ test: /\.css$/, loader: "style!css" },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader', 
              query: {
                presets: ['es2015']
              }
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            }
        ]
    }
};
