module.exports = function reverse (n) {
  return String(n).split('').reverse().map(item => (item == '-') ? '' : item).join('')
}
