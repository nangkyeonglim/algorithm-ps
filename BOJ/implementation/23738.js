const input = require('fs').readFileSync('input.txt').toString().trim();
const table = {
  A: 'a',
  B: 'v',
  E: 'ye',
  K: 'k',
  M: 'm',
  H: 'n',
  O: 'o',
  P: 'r',
  C: 's',
  T: 't',
  Y: 'u',
  X: 'h',
};

let answer = [...input];
for (let i = 0; i < input.length; i++) {
  const idx = answer.findIndex((a) => a === input[i]);
  answer.splice(idx, 1, table[input[i]]);
}

console.log(answer.join(''));
