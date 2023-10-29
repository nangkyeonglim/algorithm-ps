const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input[0].split(' ')[0]);
const record = {};

const blockLog = [];
const blockPlayer = [];

for (let i = 0; i < T; i++) {
  const [logNo, playerNo, act, ...actInfo] = input[1 + i].trim().split(' ');
  let p = record[playerNo];
  if (!p) {
    p = { lastArea: '1', items: [] };
    record[playerNo] = p;
  }

  switch (act) {
    case 'M':
      p.lastArea = actInfo[0];
      break;
    case 'F':
      if (p.lastArea !== actInfo[0]) blockLog.push(logNo);
      p.items.push(actInfo[0]);
      break;
    case 'C':
      actInfo.forEach((a) => {
        const itemIdx = p.items.findIndex((b) => b === a);
        if (itemIdx === -1 && !blockLog.includes(logNo)) blockLog.push(logNo);
        else {
          p.items.splice(itemIdx, 1);
        }
      });
      break;
    case 'A':
      let enemy = record[actInfo[0]];
      if (!enemy) {
        enemy = { lastArea: '1', items: [] };
        record[actInfo[0]] = enemy;
      }

      if (p.lastArea !== enemy.lastArea) {
        blockLog.push(logNo);
        blockPlayer.push(playerNo);
      }
  }
}

const uniqueBlockLog = blockLog.sort((a, b) => a - b);
const uniqueBlockPlayer = [...new Set(blockPlayer)].sort((a, b) => a - b);

let answer = [
  String(uniqueBlockLog.length),
  uniqueBlockLog.join(' '),
  String(uniqueBlockPlayer.length),
  uniqueBlockPlayer.join(' '),
]
  .filter((v) => v !== '')
  .join('\n');

console.log(answer);
