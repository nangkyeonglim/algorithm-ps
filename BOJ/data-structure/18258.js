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
    if (this.empty()) return -1;

    const popped = this.queue[this.front];
    this.front += 1;

    return popped;
  }

  size() {
    return this.back - this.front;
  }

  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  getFront() {
    if (this.empty()) return -1;
    return this.queue[this.front];
  }

  getBack() {
    if (this.empty()) return -1;
    return this.queue[this.back - 1];
  }
}

const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const cntOfInstructions = Number(input[0]);
const instructions = input.slice(1);

const queue = new Queue();

const answer = [];

for (let i = 0; i < cntOfInstructions; i++) {
  const [instruction, param] = instructions[i].split(' ');

  switch (instruction) {
    case 'push':
      queue.push(param);
      break;
    case 'pop':
      answer.push(queue.pop());
      break;
    case 'front':
      answer.push(queue.getFront());
      break;
    case 'back':
      answer.push(queue.getBack());
      break;
    case 'size':
      answer.push(queue.size());
      break;
    case 'empty':
      answer.push(queue.empty());
      break;
  }
}

console.log(answer.join('\n'));
