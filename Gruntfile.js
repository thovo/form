sassFiles = {
    'static/css/style.css': 'sass/style.scss'
}

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: sassFiles
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: sassFiles
            }
        },
        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['sass:dev']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('buildcss', ['sass:dist']);
};
