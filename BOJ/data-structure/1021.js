'use stric';

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, _] = input[0].split(' ').map(Number);
const deleteElements = input[1].split(' ').map(Number);

const solution = (n, deleteElements) => {
  let answer = 0;
  const arr = Array.from({ length: n }, (_, k) => {
    return k + 1;
  });
  let currentIndex = 0;

  deleteElements.forEach((deleteElement) => {
    answerIndex = arr.indexOf((value) => value === deleteElement);
    let diff = currentIndex - answerIndex;
    let absDiff = diff >= 0 ? diff : diff * -1;
    if (absDiff === 0) return arr.splice(answerIndex, 1);
    else if (absDiff > absDiff * -1 + arr.length)
      answer += absDiff * -1 + arr.length;
    else answer += absDiff;

    arr.splice(answerIndex, 1);
    currentIndex = answerIndex;
  });
  return answer;
};

console.log(solution(n, deleteElements));
