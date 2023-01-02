'use stric';

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [n, _] = input[0].split(' ').map(Number);
const deleteElements = input[1].split(' ').map(Number);

const solution = (n, deleteElements) => {
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

console.log(solution(n, deleteElements));
