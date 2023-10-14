const [input, ...windows] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n');

const [m, n] = input.split(' ');
const inputs = windows.map((window) => window.split(''));
const answer = new Array(5).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (inputs[5 * j + 1][5 * i + 1] === '.') {
      answer[0] += 1;
    } else if (inputs[5 * j + 2][5 * i + 1] === '.') {
      answer[1] += 1;
    } else if (inputs[5 * j + 3][5 * i + 1] === '.') {
      answer[2] += 1;
    } else if (inputs[5 * j + 4][5 * i + 1] === '.') {
      answer[3] += 1;
    } else {
      answer[4] += 1;
    }
  }
}

console.log(answer.join(' '));
