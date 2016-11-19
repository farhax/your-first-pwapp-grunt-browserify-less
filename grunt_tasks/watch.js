module.exports = {
  index: {
    files: ['src/index.html', 'src/img/*', 'src/favicon.ico', 'src/manifest.json', 'src/service-worker.js'],
    tasks: ['copy'],
    options: {
      spawn: false,
      livereload: true,
    },
  },

  styles: {
    files: ['src/css/**/*.less', 'src/css/**/*.css'],
    tasks: ['less', 'shell:removeUncompressedCss'],
    options: {
      spawn: false,
      livereload: true,
    },
  },

  scripts: {
    files: ['src/js/**/*'],
    tasks: ['browserify', 'shell:removeUncompressedJs'],
    options: {
      spawn: false,
      livereload: false,
    },
  }
};
