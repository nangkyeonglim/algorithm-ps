const [A, B] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (A === B) console.log('==');
else if (A > B) console.log('>');
else console.log('<');
