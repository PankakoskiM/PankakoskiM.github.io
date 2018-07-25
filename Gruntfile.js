module.exports = function(grunt) {

  grunt.initConfig({
    critical: {
      extract: {
        options: {
          base: './',
          width: 1024,
          height: 768,
          minify: true
        },
        src: '/Users/martti/Desktop/Labra/Github/PankakoskiM.github.io/index.html',
        dest: '/Users/martti/Desktop/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-critical');
  grunt.registerTask('default', ['critical']);

};
