module.exports = {
  default: {

    files: {
      'dist/js/script.js': ['src/**/*.js']
    },

    options: {
      debug: true,
      bundleDelay: 1000,
      transform: [
        ['partialify'],
        ['babelify']
      ]
    }
  }
};
