module.exports = {
	output: {
		filename: '091120181751.js',
	},
	devtool: 'source-map',
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|build)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env'],
				}
			}
		}]
	}
};
