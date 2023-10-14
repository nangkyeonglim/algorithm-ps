const input = require('fs').readFileSync(0, 'utf-8').trim();

let height = 0;
for (i = 0; i < input.length; i++) height += input[i] === input[i - 1] ? 5 : 10;

console.log(height);
