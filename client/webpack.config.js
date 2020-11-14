const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	devServer: {
		port: 8080,
		contentBase: path.resolve(__dirname, "src"),
		hot: true,
		historyApiFallback: true,
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
				use: [
					{
						loader: "html-loader",
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|jp(e*)g|svg)$/i,  
				use: [{
					loader: 'url-loader',
					options: { 
						limit: false, 
						publicPath: 'assets',
						fallback: require.resolve('file-loader'),
						name: '[name].[ext]'
					} 
				}]
			}
		],
	},
	plugins: [
		new HTMLPlugin({
			filename: "index.html",
			template: "./src/index.html",
		}),
		new MiniCssExtractPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new Dotenv()
	],
};