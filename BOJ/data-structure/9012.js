const input = require('fs').readFileSync('test.txt').toString().split('\n');
const testCases = input.slice(1).map((txt) => txt.trim());

const solution = (testCases) => {
  let answer = [];
  testCases.forEach((testCase) => {
    let count = 0;
    for (bracket of testCase) {
      if (bracket === '(') count += 1;
      else if (bracket === ')' && count === 0) {
        count -= 1;
        answer.push('NO');
        break;
      } else count -= 1;
    }
    if (count === 0) answer.push('YES');
    else if (count > 0) answer.push('NO');
  });
  return answer.join('\n');
};

console.log(solution(testCases));
