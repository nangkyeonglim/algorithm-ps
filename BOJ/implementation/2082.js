const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const numbers = [
  [
    ['#', '#', '#'],
    ['#', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#'],
    ['#', '#', '#'],
  ],
  [
    ['.', '.', '#'],
    ['.', '.', '#'],
    ['.', '.', '#'],
    ['.', '.', '#'],
    ['.', '.', '#'],
  ],
  [
    ['#', '#', '#'],
    ['.', '.', '#'],
    ['#', '#', '#'],
    ['#', '.', '.'],
    ['#', '#', '#'],
  ],
  [
    ['#', '#', '#'],
    ['.', '.', '#'],
    ['#', '#', '#'],
    ['.', '.', '#'],
    ['#', '#', '#'],
  ],
  [
    ['#', '.', '#'],
    ['#', '.', '#'],
    ['#', '#', '#'],
    ['.', '.', '#'],
    ['.', '.', '#'],
  ],
  [
    ['#', '#', '#'],
    ['#', '.', '.'],
    ['#', '#', '#'],
    ['.', '.', '#'],
    ['#', '#', '#'],
  ],
  [
    ['#', '#', '#'],
    ['#', '.', '.'],
    ['#', '#', '#'],
    ['#', '.', '#'],
    ['#', '#', '#'],
  ],
  [
    ['#', '#', '#'],
    ['.', '.', '#'],
    ['.', '.', '#'],
    ['.', '.', '#'],
    ['.', '.', '#'],
  ],
  [
    ['#', '#', '#'],
    ['#', '.', '#'],
    ['#', '#', '#'],
    ['#', '.', '#'],
    ['#', '#', '#'],
  ],
  [
    ['#', '#', '#'],
    ['#', '.', '#'],
    ['#', '#', '#'],
    ['.', '.', '#'],
    ['#', '#', '#'],
  ],
];
let answers = [[], [], [], []];

for (let i = 0; i < 4; i++) {
  for (let l = 0; l < 9; l++) {
    let impossible = false;
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 3; k++) {
        if (numbers[l][j][k] === '.' && input[j][i * 4 + k] === '#') {
          impossible = true;
          break;
        }
      }
      if (impossible) break;
    }
    if (!impossible) {
      answers[i].push(String(l));
    }
  }
}

console.log(
  answers[0][0] + answers[1][0] + ':' + answers[2][0] + answers[3][0]
);