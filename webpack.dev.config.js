const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
// const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: "development",
  entry: {
    main: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      "./index.js"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"   
  },
  mode: "development",
  target: "web",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(es6|js)$/,
        exclude: [/node_modules/, /test/, /backstop_data/],
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: "css-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|ttf|eot|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: "file-loader"
            }
          }
        ]
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: { 
                minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html",
      excludeChunks: ["server"]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [" ", ".js", ".es6"]
  }
};
