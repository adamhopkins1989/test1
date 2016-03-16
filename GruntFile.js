/*!
 * Adams Gruntfile
 * @author Adam
 */

'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

            // Project configuration
            pkg: grunt.file.readJSON('package.json'),

            // Compile Sass
            sass: {
                options: {
                    sourceMap: true,
                    sourceComments: false
                },
                dist: {
                    files: {
                        'dist/css/app.css': 'dev/scss/app.scss'
                    }
                }
            },

            // Copy html files
            copy: {
                main: {
                    files: [{
                        expand: true,
                        cwd: 'dev',
                        src: ['**/*.html'],
                        dest: 'dist'
                    }]
                }
            },

            concat: {
                options: {
                    separator: 'rn'
                },
                dev: {
                    src: ['js/module1.js', 'js/module2.js'],
                    dist: 'js/main.js'
                }
            }

        }),

        // Watch and build
        watch: {
            sass: {
                files: 'dev/scss/*.scss',
                tasks: ['sass']
            },
            html: {
                files: ['dev/*.html'],
                tasks: ['copy'],
                options: {
                    livereload: true
                }
            },
        },

        //Browersync
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "dist/css/*.css",
                        "dist/*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./dist"
                    }
                }
            }
        }

    });

// Load dependencies
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-copy');


// Run tasks
grunt.registerTask(['browserSync', 'sass', 'jshint', 'concat','uglify','copy', 'watch']
]);

};
