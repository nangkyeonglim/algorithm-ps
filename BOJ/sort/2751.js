const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const numbers = input.slice(1).map(Number);
console.log(numbers.sort((a, b) => a - b).join('\n'));
