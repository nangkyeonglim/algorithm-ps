const [input, ...pictures] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n');

const width = input.split(' ').at(-1);
const answer = [];

pictures.forEach((picture) => {
  const oneLine = [...picture];
  for (let i = 0; i < width; i++) {
    if (oneLine[i] !== '.') oneLine[width - i - 1] = oneLine[i];
  }
  answer.push(oneLine.join(''));
});

console.log(answer.join('\n'));
