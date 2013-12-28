module.exports = function(grunt) {
	'use strict';

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			src: ['gruntfile.js', 'src/*.js', 'test/spec/*.js'],
			options: {
				expr: true
			}
		},

		uglify: {
			build: {
				files: {
					'jquery.clearInput.js': 'src/jquery.clearInput.js'
				}
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js',
				background: true
			}
		},

		watch: {
			js: {
				files: 'src/*.js',
				tasks: ['jshint', 'uglify']
			},

			karma: {
				files: ['src/js/*.js', 'test/**/*.js'],
				tasks: ['karma:unit:run']
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'karma', 'uglify']);
};