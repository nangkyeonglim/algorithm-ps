const [A, B] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(
  A +
    B +
    '\n' +
    (A - B) +
    '\n' +
    A * B +
    '\n' +
    Math.floor(A / B) +
    '\n' +
    (A % B)
);
