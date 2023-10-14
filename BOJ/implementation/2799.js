const [input, ...windows] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n');

const [m, n] = input.split(' ');
const inputs = windows.map((window) => window.split(''));
const answer = new Array(5).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let type = 0;

    for (let k = 0; k < 4; k++) {
      if (k === 3 && inputs[5 * j + 1 + k][5 * i + 1] === '*')
        answer[type + 1] += 1;
      else if (inputs[5 * j + 1 + k][5 * i + 1] === '*') {
        type += 1;
      } else {
        answer[type] += 1;
        break;
      }
    }
  }
}

console.log(answer.join(' '));
