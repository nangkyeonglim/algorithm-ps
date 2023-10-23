function solution(inputs) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const count = [0, 0, 0];

  inputs.forEach((input, idx) => {
    if (input === p1[idx % p1.length]) count[0]++;
    if (input === p2[idx % p2.length]) count[1]++;
    if (input === p3[idx % p3.length]) count[2]++;
  });
  console.log(count);

  const highScore = Math.max(...count);
  const answer = [];

  count.forEach((score, index) => {
    if (score === highScore) return answer.push(index + 1);
  });

  return answer.sort((a, b) => a - b);
}

console.log(solution([1, 3, 2, 4, 2]));
