const [A, B] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ');

console.log(A / B);
