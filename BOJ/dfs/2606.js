const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((t) => t.trim());

const cntOfComputers = Number(input[0]);
const cntOfEdges = Number(input[1]);

const graph = Array.from({ length: cntOfComputers + 1 }).map(() => []);
const visited = Array.from({ length: cntOfComputers + 1 }).fill(false);
let answer = 0;

for (let i = 0; i < cntOfEdges; i++) {
  const [v1, v2] = input[i + 2].split(' ').map(Number);

  graph[v1].push(v2);
  graph[v2].push(v1);
}

const dfs = (startNode) => {
  visited[startNode] = true;
  answer += 1;

  for (let nextNode of graph[startNode]) {
    if (!visited[nextNode]) dfs(nextNode);
  }
};

dfs(1);

console.log(answer - 1);
