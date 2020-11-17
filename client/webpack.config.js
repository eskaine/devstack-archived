const Dotenv = require("dotenv-webpack");

module.exports = {
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/i,
        type: 'asset/resource'
      },
      
    ],
  },
  plugins:[new Dotenv()]
};
