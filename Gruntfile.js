module.exports = (grunt) => {
  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: require('./grunt_tasks/browserify'),
    uglify:     require('./grunt_tasks/uglify'),
    less:       require('./grunt_tasks/less'),
    cssmin:     require('./grunt_tasks/cssmin'),
    watch:      require('./grunt_tasks/watch'),
    copy:       require('./grunt_tasks/copy'),
    connect:    require('./grunt_tasks/connect'),
    shell:      require('./grunt_tasks/shell'),
  });

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['browserify', 'uglify', 'less', 'cssmin', 'copy', 'shell:removeUncompressed']);
  grunt.registerTask('server', [ 'build', 'connect', 'watch' ]);


  require('load-grunt-tasks')(grunt);
};
