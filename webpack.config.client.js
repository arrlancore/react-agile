const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
module.exports = {
  // devtool: 'source-map',
  // devtool: 'hidden-source-map',
  devtool: isProd ? 'hidden-source-map' : 'cheap-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './client/index.js',
  ],
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'common'),
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { BUILD_TARGET: JSON.stringify('client') },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest', 'vendor'],
      minChunks: 1,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false, // enable source maps to map errors (stack traces) to modules
      output: {
        comments: false, // remove all comments
      },
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3001,
    historyApiFallback: true,
    hot: true,
  },
  output: {
    path: path.join(__dirname, '.build'),
    publicPath: 'http://localhost:3001/',
    filename: '[name].js',
  },
};
