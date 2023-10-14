const input = require('fs').readFileSync(0, 'utf-8').trim();

let count = 0;

if (input < 100) count = Number(input);
else {
  count += 99;
  for (let i = 100; i < Number(input) + 1; i++) {
    const numbers = i.toString().split('');
    if (numbers[1] - numbers[0] === numbers[2] - numbers[1]) count += 1;
  }
}
console.log(count);
