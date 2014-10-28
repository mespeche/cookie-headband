module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            all: ['js/cookie-headband.js']
        },
        uglify: {
            prod: {
                files: {
                    'js/cookie-headband.min.js': [
                        'js/cookie-headband.js'
                    ]
                }
            }
        },
        watch: {
            js: {
                files: ['js/cookie-headband.js'],
                tasks: ['jshint', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'uglify']);

}