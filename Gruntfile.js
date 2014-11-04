module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: "style/*.scss",
                tasks: ['sass']
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    "style/styles.css" : "style/styles.scss"
                }
            }
        },
        jasmine: {
            pivotal: {
                src: 'components/*.js',
                options: {
                    specs: 'tests/spec/*.js',
                    keepRunner: true,
                    outfile: 'tests/tests.html',
                    vendor: 'utils.js',
                    helper: 'utils.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', 'watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('sass-watch', ['watch']);
    grunt.registerTask('sass-build', ['sass']);
    grunt.registerTask('tests', ['jasmine']);
};
