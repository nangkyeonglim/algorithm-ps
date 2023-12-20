const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(' ');

  console.log([...S].map((c) => c.repeat(Number(R))).join(''));
}
