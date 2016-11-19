module.exports = {
  default: {
    files: [
      {
        src: 'src/index.html',
        dest: 'dist/index.html'
      },
      {
        src: 'src/favicon.ico',
        dest: 'dist/favicon.ico'
      },
      {
        src: 'src/manifest.json',
        dest: 'dist/manifest.json'
      },
      {
        src: 'src/service-worker.js',
        dest: 'dist/service-worker.js'
      },
      {
        cwd: 'src/images/',
        src: '**/*',
        dest: 'dist/images/',
        expand: true
      },
    ]
  },

};
