 
module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        expand: true,
        cwd: '_book',
        src: ['*.html', 'src/*.html'],
        dest: 'dist/'
      }
    },
    cssmin: {
      files: {
        expand: true,
        cwd: '_book',
        src: ['gitbook/**/*.css','src/*.css'],
        dest: 'dist/'
      }
    },
    uglify: {
      main: {
        files: [{
          expand: true,
          cwd: '_book',
          src: ['gitbook/**/*.js', '!gitbook/gitbook-plugin-anchor-navigation-ex/**/*.js','src/*.js'],
          dest: 'dist/'
        }]
      }
    },
    copy: {
      html: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.html', 'src/*.html'],
          dest: '_book/'
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['gitbook/**','src/*.js'],
          dest: '_book/'
        }]
      },
      css:{
        files:[{
          expand:true,
          cwd:'dist',
          src:['gitbook/**/*.css','src/*.css'],
          dest:'_book/'
        }]
      }
    }
});
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['htmlmin','cssmin','uglify','copy']);
};
