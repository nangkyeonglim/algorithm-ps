const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const T = Number(input[0].split(' ')[0]);
const record = {};

let blockLog = new Set();
let blockPlayer = new Set();

for (let i = 0; i < T; i++) {
  const [logNo, playerNo, act, ...actInfo] = input[1 + i].split(' ');
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
      if (p.lastArea !== actInfo[0]) blockLog.add(logNo);
      p.items.push(actInfo[0]);
      break;
    case 'C':
      actInfo.forEach((a) => {
        const itemIdx = p.items.findIndex((b) => b === a);
        if (itemIdx === -1 && !blockLog.includes(logNo)) blockLog.add(logNo);
        else {
          p.items.splice(itemIdx, 1);
        }
      });
      break;
    case 'A':
      let enemy = record[actInfo[0]];
      if (!enemy && p.lastArea !== '1') {
        blockLog.add(logNo);
        blockPlayer.add(playerNo);
      }
      if (enemy && p.lastArea !== enemy.lastArea) {
        blockLog.add(logNo);
        blockPlayer.add(playerNo);
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
