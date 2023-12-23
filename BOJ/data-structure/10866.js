class Deque {
  constructor(size) {
    this.deque = new Array(size);
    this.front = size / 2 - 1;
    this.back = size / 2;
  }

  push_front(value) {
    this.deque[this.front] = value;
    this.front -= 1;
  }

  push_back(value) {
    this.deque[this.back] = value;
    this.back += 1;
  }

  pop_front() {
    if (this.isEmpty()) return -1;
    this.front += 1;
    return this.deque[this.front];
  }

  pop_back() {
    if (this.isEmpty()) return -1;
    this.back -= 1;
    return this.deque[this.back];
  }

  getSize() {
    return this.back - this.front - 1;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  getFront() {
    if (this.isEmpty()) return -1;

    return this.deque[this.front + 1];
  }

  getBack() {
    if (this.isEmpty()) return -1;

    return this.deque[this.back - 1];
  }
}

const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const N = Number(input[0]);
const instructions = input.slice(1);
const deque = new Deque(2 * N);
const answer = [];

instructions.forEach((instruction) => {
  switch (instruction) {
    case 'front':
      answer.push(deque.getFront());
      break;
    case 'back':
      answer.push(deque.getBack());
      break;
    case 'size':
      answer.push(deque.getSize());
      break;
    case 'empty':
      answer.push(deque.isEmpty() ? 1 : 0);
      break;
    case 'pop_front':
      answer.push(deque.pop_front());
      break;
    case 'pop_back':
      answer.push(deque.pop_back());
      break;
    default:
      const [i, v] = instruction.split(' ');

      if (i === 'push_front') deque.push_front(v);
      if (i === 'push_back') deque.push_back(v);
  }
});

console.log(answer.join('\n'));
