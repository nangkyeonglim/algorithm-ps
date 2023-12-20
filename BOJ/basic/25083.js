const [S, i] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(S.at(Number(i - 1)));
