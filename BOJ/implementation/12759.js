let [now, ...turns] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const chess = Array.from(Array(3), () => Array(3).fill(null));

const checkWin = () => {
  if (chess[0][0] && chess[0][0] === chess[1][1] && chess[0][0] === chess[2][2])
    return chess[0][0];
  if (chess[0][2] && chess[0][2] === chess[1][1] && chess[0][2] === chess[2][0])
    return chess[0][2];
  for (let i = 0; i < 3; i++) {
    if (
      chess[i][0] &&
      chess[i][0] === chess[i][1] &&
      chess[i][0] === chess[i][2]
    )
      return chess[i][0];
    if (
      chess[0][i] &&
      chess[0][i] === chess[1][i] &&
      chess[0][i] === chess[2][i]
    )
      return chess[0][i];
  }
};

for (let i = 0; i < 9; i++) {
  const [x, y] = turns[i].split(' ');
  chess[x - 1][y - 1] = now;
  const answer = checkWin();
  if (answer) {
    console.log(Number(answer));
    break;
  }
  now = now === '1' ? '2' : '1';
}
if (!answer) console.log(0);
