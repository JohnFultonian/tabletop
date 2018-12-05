const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [path.resolve(__dirname, 'src'), "node_modules"]
  },
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    })
  ],
}
