const [input, ...chess] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input.split(' ');

const chessCharacters = chess.map((c) => c.split(''));
let answer = Infinity;

for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    let count = 0;
    let currentLetter = chessCharacters[i][j];

    for (let k = i; k < i + 8; k++) {
      for (let l = j; l < j + 8; l++) {
        if (chessCharacters[k][l] !== currentLetter) {
          count += 1;
        }
        currentLetter = currentLetter === 'W' ? 'B' : 'W';
      }
      currentLetter = currentLetter === 'W' ? 'B' : 'W';
    }

    answer = Math.min(answer, count, 64 - count);
  }
}

console.log(answer);
