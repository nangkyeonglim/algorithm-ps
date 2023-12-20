const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const max = Math.max(...input);
console.log(max + '\n' + (input.findIndex((v) => v === max) + 1));
