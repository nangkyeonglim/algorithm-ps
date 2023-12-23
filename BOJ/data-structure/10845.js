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

    const popped = this.queue[this.front];
    this.front += 1;

    return popped;
  }

  getSize() {
    return this.back - this.front;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  getFront() {
    if (this.isEmpty()) return -1;
    return this.queue[this.front];
  }

  getBack() {
    if (this.isEmpty()) return -1;
    return this.queue[this.back - 1];
  }
}

const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const instructions = input.slice(1);
const queue = new Queue();
const answer = [];

instructions.forEach((instruction) => {
  switch (instruction) {
    case 'front':
      answer.push(queue.getFront());
      break;
    case 'back':
      answer.push(queue.getBack());
      break;
    case 'size':
      answer.push(queue.getSize());
      break;
    case 'empty':
      answer.push(queue.isEmpty() ? 1 : 0);
      break;
    case 'pop':
      answer.push(queue.pop());
      break;
    default:
      queue.push(instruction.split(' ')[1]);
  }
});

console.log(answer.join('\n'));
