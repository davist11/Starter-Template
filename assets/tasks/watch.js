module.exports = {
	sass: {
		files: ['assets/stylesheets/src/*', 'assets/stylesheets/src/*/*'],
		tasks: ['css']
	},

	js: {
		files: ['assets/scripts/src/*/*', 'assets/scripts/src/*'],
		tasks: ['js']
	}
};