class Deque {
  constructor(size) {
    this.deque = new Array(size);
    this.front = size / 2;
    this.back = size / 2 + 1;
  }

  pushFront(value) {
    this.deque[this.front] = value;
    this.front -= 1;
  }

  pushBack(value) {
    this.deque[this.back] = value;
    this.back += 1;
  }

  popFront() {
    if (this.isEmpty()) return -1;

    this.front += 1;
    return this.deque[this.front];
  }

  popBack() {
    if (this.isEmpty()) return -1;

    this.back -= 1;
    return this.deque[this.back];
  }

  getSize() {
    return this.back - this.front - 1;
  }

  isEmpty() {
    return this.getSize() === 0 ? 1 : 0;
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
const cntOfInstructions = Number(input[0]);
const instructions = input.slice(1);

const deque = new Deque(cntOfInstructions * 2);

const answer = [];

for (let i = 0; i < cntOfInstructions; i++) {
  const [instruction, param] = instructions[i].split(' ');

  switch (instruction) {
    case '1':
      deque.pushFront(param);
      break;
    case '2':
      deque.pushBack(param);
      break;
    case '3':
      answer.push(deque.popFront());
      break;
    case '4':
      answer.push(deque.popBack());
      break;
    case '5':
      answer.push(deque.getSize());
      break;
    case '6':
      answer.push(deque.isEmpty());
      break;
    case '7':
      answer.push(deque.getFront());
      break;
    case '8':
      answer.push(deque.getBack());
      break;
  }
}

console.log(answer.join('\n'));
