/* webpackを読み込みます */
var webpack = require('webpack');

module.exports = {
  entry: './src/Hello.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  // デバッグ用にソースマップの出力を有効にします。
  devtool: 'source-map',

  resolve: {
    // 解決可能な拡張子として、'.ts' と '.tsx' を追加します。
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // 拡張子が .ts と .tsx　のファイル を 'awesome-typescript-loader' で
      // 扱うようにします。
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // 出力されるすべての .js ファイルは、'source-map-loader' で
      // 再加工されたソースマップを持ちます。
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  /** プラグインの設定 */
  plugins: [
    /** DefinePluginの実行 */
    new webpack.DefinePlugin({
      // process.env.NODE_ENV を 'production' に置き換える
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    /** UglifyJsPluginの実行 */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // 圧縮する時に警告を除去する
        warnings: false,
      },
    }),
  ],
};
