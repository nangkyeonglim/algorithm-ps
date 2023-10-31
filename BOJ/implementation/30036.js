const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const [cntOfInk, sizeOfStage, cntOfCommand] = input[0].split(' ').map(Number);
const inkList = [...input[1]];
const stage = input.slice(2, 2 + sizeOfStage).map((x) => x.split(''));
const commandList = [...input.at(-1)];

let totalInk = 0;
let inkIndex = 0;

for (let i = 0; i < cntOfCommand; i++) {
  let currentPosition;

  for (let j = 0; j < sizeOfStage; j++) {
    for (let k = 0; k < sizeOfStage; k++) {
      if (stage[j][k] === '@') {
        currentPosition = [j, k];
        break;
      }
    }
  }
  switch (commandList[i]) {
    case 'j':
      totalInk++;
      break;
    case 'J':
      if (totalInk !== 0) {
        const targetPositions = [];

        for (let j = 0; j < sizeOfStage; j++) {
          for (let k = 0; k < sizeOfStage; k++) {
            if (stage[j][k] !== '@' && stage[j][k] !== '.')
              targetPositions.push([j, k]);
          }
        }

        for (let j = 0; j < targetPositions.length; j++) {
          const absValue =
            Math.abs(targetPositions[j][0] - currentPosition[0]) +
            Math.abs(targetPositions[j][1] - currentPosition[1]);
          const currentColor = inkList[inkIndex];

          if (absValue <= totalInk) {
            stage[targetPositions[j][0]][targetPositions[j][1]] = currentColor;
          }
        }
        totalInk = 0;
      }
      inkIndex = (inkIndex + 1) % cntOfInk;
      break;
    default:
      if (
        commandList[i] === 'U' &&
        currentPosition[0] !== 0 &&
        stage[currentPosition[0] - 1][currentPosition[1]] === '.'
      ) {
        stage[currentPosition[0]][currentPosition[1]] = '.';
        stage[currentPosition[0] - 1][currentPosition[1]] = '@';
      }
      if (
        commandList[i] === 'D' &&
        currentPosition[0] + 1 !== sizeOfStage &&
        stage[currentPosition[0] + 1][currentPosition[1]] === '.'
      ) {
        stage[currentPosition[0]][currentPosition[1]] = '.';
        stage[currentPosition[0] + 1][currentPosition[1]] = '@';
      }
      if (
        commandList[i] === 'L' &&
        currentPosition[1] !== 0 &&
        stage[currentPosition[0]][currentPosition[1] - 1] === '.'
      ) {
        stage[currentPosition[0]][currentPosition[1]] = '.';
        stage[currentPosition[0]][currentPosition[1] - 1] = '@';
      }
      if (
        commandList[i] === 'R' &&
        currentPosition[1] + 1 !== sizeOfStage &&
        stage[currentPosition[0]][currentPosition[1] + 1] === '.'
      ) {
        stage[currentPosition[0]][currentPosition[1]] = '.';
        stage[currentPosition[0]][currentPosition[1] + 1] = '@';
      }
  }
}

console.log(stage.map((x) => x.join('')).join('\n'));
