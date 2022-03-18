module.exports = {
  mutate: [
    'src/animals.js'
  ],
  reporters: ['html', 'clear-text'],
  testRunner: 'jest',
  jest: {
    enableFindRelatedTests: false
  }
}