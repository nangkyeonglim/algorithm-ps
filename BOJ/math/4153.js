const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

input.pop();

let answer = '';

input.forEach((tc) => {
  let [a, b, c] = tc.split(' ');
  const max = Math.max(a, b, c);
  answer +=
    Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(max, 2) * 2 ===
    0
      ? 'right\n'
      : 'wrong\n';
});

console.log(answer);
