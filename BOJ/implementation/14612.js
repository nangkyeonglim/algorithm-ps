const [info, ...instructions] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const [N, M] = info.split(' ').map(Number);

const orders = [];

for (let i = 0; i < N; i++) {
  if (instructions[i].includes('order')) {
    orders.push(instructions[i].split(' ').slice(1).map(Number));
  }
  if (instructions[i].includes('sort')) {
    orders.sort((a, b) => {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
    });
  }
  if (instructions[i].includes('complete')) {
    const idx = orders.findIndex(
      (o) => o[0] === Number(instructions[i].split(' ')[1])
    );
    orders.splice(idx, 1);
  }
  console.log(
    orders.length === 0 ? 'sleep' : orders.map((order) => order[0]).join(' ')
  );
}
