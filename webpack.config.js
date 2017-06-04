const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    library: 'index',
    libraryTarget: 'commonjs2',
    filename: 'index.min.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: true,
      mangle: true,
      sourcemap: false,
      compressor: {
        warnings: false,
      },
    }),
  ],
};
