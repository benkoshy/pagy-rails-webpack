const path = require("path")
const webpack = require("webpack")

module.exports = (env) => {
	return {
		mode: "production",
		devtool: "source-map",
		entry: {
			application: "./app/javascript/application.js"
		},
		output: {
			filename: "[name].js",
			sourceMapFilename: "[name].js.map",
			path: path.resolve(__dirname, "app/assets/builds"),
		},
		plugins: [
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 1
			})
		],
		resolve: {
			modules: [env.pagyPath, 'node_modules']
		}
	}
}