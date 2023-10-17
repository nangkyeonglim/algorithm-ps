const input = Number(require('fs').readFileSync('input.txt').toString().trim());

for (let i = 1; i <= input; i++) {
  const sum =
    i +
    i
      .toString()
      .split('')
      .map(Number)
      .reduce((prev, curr) => prev + curr);
  if (sum === input) {
    console.log(i);
    break;
  }
  if (i === input) console.log(0);
}
