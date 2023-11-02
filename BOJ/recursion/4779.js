const numbers = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);
const answer = [];

const solution = (str) => {
  if (str.length === 1) return '-';

  const length = str.length / 3;

  const newStringList = [...str];
  newStringList.splice(length, length, ' '.repeat(length));

  const newString = newStringList.join('');

  return (
    solution(newString.slice(0, length)) +
    newString.slice(length, length * 2) +
    solution(newString.slice(length * 2))
  );
};

numbers.forEach((n) => answer.push(solution('-'.repeat(Math.pow(3, n)))));

console.log(answer.join('\n'));
