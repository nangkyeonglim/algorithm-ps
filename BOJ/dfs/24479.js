const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((t) => t.trim());

const [N, M, R] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N + 1).fill(false);
const order = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
  const [V1, V2] = input[i].split(' ').map(Number);

  graph[V1].push(V2);
  graph[V2].push(V1);
}

for (const e of graph) {
  if (e) e.sort((a, b) => a - b);
}

let count = 1;
const dfs = (startNode) => {
  visited[startNode] = true;
  order[startNode - 1] = count;
  count += 1;

  for (let i = 0; i < graph[startNode].length; i++) {
    const nextNode = graph[startNode][i];
    if (!visited[nextNode]) dfs(nextNode);
  }
};

dfs(R);

console.log(order.join('\n'));
