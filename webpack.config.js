var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx' 
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
      'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname, 
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname, 
		alias: {
			Main: 'app/components/Main.jsx',
			Home: 'app/components/Home.jsx',
			Henna1: 'app/components/Pages/Henna1.jsx',
			Mabrook23: 'app/components/Pages/Mabrook23.jsx',
			Mubarak12: 'app/components/Pages/Mubarak12.jsx',
			Nooresul2: 'app/components/Pages/Nooresul2.jsx',
			Sajna123: 'app/components/Pages/Sajna123.jsx',
			Sulenoor3: 'app/components/Pages/Sulenoor3.jsx',
			Tchowdhry13: 'app/components/Pages/Tchowdhry13.jsx',
			MendhiDetails: 'app/components/EventDetails/MendhiDetails.jsx',
			ShaadiDetails: 'app/components/EventDetails/ShaadiDetails.jsx',
			ValimaDetails: 'app/components/EventDetails/ValimaDetails.jsx',
			Footer: 'app/components/Footer.jsx',
	    applicationStyles: 'app/styles/app.scss'
	},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			},
		]
	},
	devtool: 'cheap-module-eval-source-map'
};