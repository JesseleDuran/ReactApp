module.exports = {
	//punto de entrada del webpack, el primer archivo que va a leer
	entry: './source/server.js',
	//dónde webpack va a dejar los archivos
	output: {
		filename: '.built/server',
	},
	//config módulos
	 module: {
		 loaders: [
			 {
				 test: /\.json$/,
				 loader: 'json',
			 },
			 {
				 test: /\.jsx?,
				 loader: 'babel'
				 exclude: /(node_modules)/,
				 query: {
					 presets: ['latest-minimal', 'react']
				 }
			 }
		 ]
	 },

	 target: 'node',
};
