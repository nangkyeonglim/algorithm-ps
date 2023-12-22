const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const k = Number(input[0].split(' ')[1]);
const scores = input[1].split(' ').map(Number);

scores.sort((a, b) => b - a);

console.log(scores[k - 1]);
