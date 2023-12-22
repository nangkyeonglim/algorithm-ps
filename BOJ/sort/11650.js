const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const dots = input.slice(1).map((c) => c.split(' ').map(Number));

dots.sort((a, b) => {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
});

console.log(dots.map((c) => c.join(' ')).join('\n'));
