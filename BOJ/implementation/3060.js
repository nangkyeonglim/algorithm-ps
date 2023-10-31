const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const T = Number(input[0]);
const answer = [];

for (let i = 0; i < T; i++) {
  const N = Number(input[2 * i + 1]);
  const quantities = input[2 * (i + 1)].split(' ').map(Number);
  let total = 0;
  let day = 1;
  let newQuantities = [...quantities];

  while (true) {
    total += newQuantities.reduce((cur, v) => (cur += v));
    console.log(total, newQuantities);

    if (total > N) break;
    newQuantities = newQuantities.map((q, index) => {
      return (
        q +
        newQuantities[index + 1 > 5 ? 0 : index + 1] +
        newQuantities[index - 1 < 0 ? 5 : index - 1] +
        newQuantities[(index + 3) % 6]
      );
    });
    day++;
    total = 0;
  }

  answer.push(day);
}

console.log(answer.join('\n'));
