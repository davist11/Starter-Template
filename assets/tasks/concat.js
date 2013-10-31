module.exports = {
	options: {
		separator: ';'
	},

	application: {
		src:
			[
				'assets/scripts/src/plugins/*.js',
				'assets/scripts/src/core/application.js'
			],
		dest: 'assets/scripts/min/application.js'
	}
};