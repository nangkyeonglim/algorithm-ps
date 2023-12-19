const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((s) => s.split(''));
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => false)
);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (startX, startY) => {
  const queue = [];
  queue.push([startX, startY, 1]);
  visited[startX][startY] = true;

  while (queue.length !== 0) {
    const [curX, curY, curDistance] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const newX = curX + dx[i];
      const newY = curY + dy[i];

      if (
        newX >= 0 &&
        newX < N &&
        newY >= 0 &&
        newY < M &&
        graph[newX][newY] === '1' &&
        !visited[newX][newY]
      ) {
        queue.push([newX, newY, curDistance + 1]);
        visited[newX][newY] = true;
      }
    }

    if (curX === N - 1 && curY === M - 1) return curDistance;
  }
};

console.log(bfs(0, 0));
