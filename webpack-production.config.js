/* webpackを読み込みます */
var webpack = require('webpack');

module.exports = {
  entry: './src/Hello.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  /* プラグインの設定 */
  plugins: [
    /* DefinePluginの実行 */
    new webpack.DefinePlugin({
      // process.env.NODE_ENVを'production'に置き換える
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    /* UglifyJsPluginの実行 */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // 圧縮する時に警告を除去する
        warnings: false,
      },
    }),
  ],
};
