module.exports = function(grunt) {
	'use strict';

	var requireTask = function(name) {
		return require('./assets/tasks/' + name);
	};

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: requireTask('concat'),
		uglify: requireTask('uglify'),
		watch: requireTask('watch'),
		compass: requireTask('compass'),
		cssmin: requireTask('cssmin')
	});

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('js', ['concat', 'uglify']);
	grunt.registerTask('css', ['compass', 'cssmin']);
};