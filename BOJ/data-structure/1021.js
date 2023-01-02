'use stric';

const input = require('fs').readFileSync('test.txt').toString().split('\n');

const [n, _] = input[0].split(' ').map(Number);
const deleteElements = input[1].split(' ').map(Number);

//solution1이 n이 클수록 시간은 더 적게 걸림.
const solution1 = (n, deleteElements) => {
  let answer = 0;
  const arr = Array.from({ length: n }, (_, k) => k + 1);
  let currentIndex = 0;

  deleteElements.forEach((deleteElement) => {
    answerIndex = arr.indexOf(deleteElement);
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

const solution2 = (n, deleteElements) => {
  let answer = 0;
  let arr = Array.from({ length: n }, (_, k) => k + 1);

  deleteElements.forEach((curDeleteElement) => {
    let idx = arr.indexOf(curDeleteElement);
    if (curDeleteElement === arr[0]) {
      return arr.shift();
    }
    if (idx <= Math.floor(arr.length / 2)) {
      arr = [...arr, ...arr.slice(0, idx)];
      arr.splice(0, idx + 1);
      answer += idx;
    } else {
      let temp = [...arr.slice(idx + 1)];
      arr.splice(idx);
      arr = [...temp, ...arr];
      answer += temp.length + 1;
    }
  });
  return answer;
};

const start1 = new Date().getTime();
solution1(n, deleteElements);
const end1 = new Date().getTime();
const start2 = new Date().getTime();
solution2(n, deleteElements);
const end2 = new Date().getTime();

console.log(end1 - start1, end2 - start2);
