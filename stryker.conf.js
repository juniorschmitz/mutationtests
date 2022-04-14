module.exports = {
  mutate: [
    'src/gato.js',
    'src/cachorro.js'
  ],
  reporters: ['html', 'clear-text'],
  testRunner: 'jest',
  jest: {
    enableFindRelatedTests: false
  }
}