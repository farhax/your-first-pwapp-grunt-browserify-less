module.exports = {
  removeUncompressed: {
    command: [
      'rm ./dist/css/style.css',
      'rm ./dist/js/script.js'
    ].join('&&')
  },
  removeUncompressedCss: {
    command: 'rm ./dist/css/style.css'
  },
  removeUncompressedJs: {
    command: 'rm ./dist/js/script.js'
  }
};
