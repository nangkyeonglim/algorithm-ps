// 누적합 방식
const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const n = input[0];
const numbers = input.slice(1);
const size = Math.max(...numbers);
const counting = new Array(size + 1).fill(0);
const result = new Array(size + 1);

// 1은 0번 인덱스에 저장된다.
for (let i = 0; i < n; i++) {
  counting[numbers[i]] += 1;
}

// 누적합으로 변환한다.
for (let i = 0; i < size; i++) {
  counting[i + 1] = counting[i] + counting[i + 1];
}

// 원본배열을 돌면서 위치체크하고 하나씩 빼준다.
for (let i = 0; i < n; i++) {
  const position = counting[numbers[i]];
  result[position] = numbers[i];
  counting[numbers[i]] -= 1;
}

console.log(result.join('\n'));

// 일반 방식
const input2 = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const numbers2 = input2.slice(1);
const counting2 = new Array(10001).fill(0);
const result2 = [];

for (let i = 0; i < n; i++) {
  counting2[numbers2[i]] += 1;
}

for (let i = 0; i < counting2.length; i++) {
  for (let j = 0; j < counting2[i]; j++) result2.push(i);
}

console.log(result2.join('\n'));
