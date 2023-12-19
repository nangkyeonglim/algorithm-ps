const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const map = input.slice(1).map((s) => s.split(''));
const visited = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);

const dx = [0, 0, 1, -1];
const dy = [-1, 1, 0, 0];

const bfs = (startX, startY) => {
  const queue = [];
  let houseCount = 1;
  queue.push([startX, startY]);
  visited[startX][startY] = true;

  while (queue.length !== 0) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const newX = curX + dx[i];
      const newY = curY + dy[i];

      if (
        newX >= 0 &&
        newX < N &&
        newY >= 0 &&
        newY < N &&
        map[newX][newY] === '1' &&
        !visited[newX][newY]
      ) {
        queue.push([newX, newY]);
        visited[newX][newY] = true;
        houseCount += 1;
      }
    }
  }
  return houseCount;
};

let totalCount = 0;
let houseCounts = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === '1' && !visited[i][j]) {
      totalCount += 1;
      houseCounts.push(bfs(i, j));
    }
  }
}

console.log(totalCount + '\n' + houseCounts.sort((a, b) => a - b).join('\n'));
