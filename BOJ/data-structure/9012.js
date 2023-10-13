const [_, ...testCases] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n');

const solution = (testCases) => {
  let answer = [];

  testCases.forEach((testCase) => {
    let count = 0;

    for (bracket of testCase) {
      count += bracket === '(' ? 1 : -1;

      if (count < 0) break;
    }

    answer.push(count === 0 ? 'YES' : 'NO');
  });

  return answer.join('\n');
};

console.log(solution(testCases));
