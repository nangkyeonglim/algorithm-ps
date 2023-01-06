const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const instructions = input.slice(1).map((txt) => txt.trim());

const solution = (instructions) => {
  let answer = [];
  let stack = [];
  instructions.forEach((instruction) => {
    switch (instruction) {
      case 'pop':
        answer.push(stack.pop() || -1);
        break;
      case 'size':
        answer.push(stack.length);
        break;
      case 'empty':
        answer.push(stack.length ? 0 : 1);
        break;
      case 'top':
        answer.push(stack[stack.length - 1] || -1);
        break;
      default:
        stack.push(Number(instruction.split(' ')[1]));
    }
  });
  return answer.join('\n');
};

console.log(solution(instructions));
