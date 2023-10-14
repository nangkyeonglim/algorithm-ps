const [n, ...testCases] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n');

const solution = (n, testCases) => {
  const basket = Array.from({ length: n }, (_, i) => i + 1);

  testCases.forEach((testCase) => {
    const [n, m] = testCase.split(' ');

    const deleteCount = m - n + 1;
    const change = basket.slice(n - 1, m).reverse();

    basket.splice(n - 1, deleteCount, ...change);
  });
  return basket.join(' ');
};

console.log(solution(n.split(' ').at(0), testCases));
