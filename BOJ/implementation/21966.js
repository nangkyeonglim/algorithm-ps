const [length, sentence] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n');

if (sentence.length <= 25) console.log(sentence);
else {
  const answer = [...sentence];
  if (sentence.slice(11, -12).includes('.')) {
    answer.splice(9, length - 19, '......');
  } else {
    answer.splice(11, length - 22, '...');
  }
  console.log(answer.join(''));
}
