module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          '**/*.sass',
          '**/*.scss'
        ],
        tasks: ['compass']
      },
      options: {
         livereload: true,
      },
      js: {
        files: [
          'assets/js/*.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint']
      }
    },
    compass: {
        dev: {
            options: {
                sassDir: 'custom-sass/scss',
                cssDir: 'css',
                imagesPath: 'assets/img',
                noLineComments: false,
                outputStyle: 'compressed'
            }
        }
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
};