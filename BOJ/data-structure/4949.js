const testCases = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const solution = (tc) => {
  const answer = [];

  tc.forEach((testCase) => {
    const stack = [];

    for (char of testCase) {
      if (char === '(' || char === '[') stack.push(char);
      else if (
        (stack.at(-1) === '(' && char === ')') ||
        (stack.at(-1) === '[' && char === ']')
      ) {
        stack.pop();
      } else if (char === ')' || char === ']') {
        stack.push(char);
        break;
      }
    }
    answer.push(stack.length === 0 ? 'yes' : 'no');
  });
  return answer.join('\n');
};

console.log(solution(testCases.slice(0, testCases.length - 1)));
