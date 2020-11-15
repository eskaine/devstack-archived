const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(config, {
  mode: "development",
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
    historyApiFallback: true,
    open: true
},
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }
    }),
  ],
});
