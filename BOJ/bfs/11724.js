class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.back = 0;
  }

  push(value) {
    this.queue[this.back] = value;
    this.back += 1;
  }

  pop() {
    if (this.isEmpty()) return -1;

    const value = this.queue[this.front];
    this.front += 1;

    return value;
  }

  isEmpty() {
    return this.back - this.front === 0;
  }
}

const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }).map(() => []);
const visited = new Array(N + 1).fill(false);

for (let i = 1; i <= M; i++) {
  const [V1, V2] = input[i].split(' ').map(Number);

  graph[V1].push(V2);
  graph[V2].push(V1);
}

const bfs = (startNode) => {
  const queue = new Queue();
  visited[startNode] = true;
  queue.push(startNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.pop();

    for (let i = 0; i < graph[currentNode].length; i++) {
      const nextNode = graph[currentNode][i];
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push(nextNode);
      }
    }
  }
};

visited[0] = true;
let count = 0;

while (visited.includes(false)) {
  const startNode = visited.findIndex((v) => v === false);
  count += 1;
  bfs(startNode);
}

console.log(count);
