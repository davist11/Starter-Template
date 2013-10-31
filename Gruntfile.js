module.exports = function(grunt) {
	'use strict';

	var taskPath = './assets/tasks/';

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: require(taskPath + 'concat'),
		uglify: require(taskPath + 'uglify'),
		watch: require(taskPath + 'watch'),
		compass: require(taskPath + 'compass'),
		cssmin: require(taskPath + 'cssmin')
	});

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('js', ['concat', 'uglify']);
	grunt.registerTask('css', ['compass', 'cssmin']);
};