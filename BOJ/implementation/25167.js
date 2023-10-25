const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const [problemCnt, personCnt, recordCnt] = input.shift().split(' ');
const persons = input.shift().trim().split(' ');
const records = input.map((x) => x.trim().split(' '));
const score = new Map();
persons.forEach((person) => {
  score.set(person, 0);
});

for (let i = 0; i < problemCnt; i++) {
  const tempScore = [];
  const problemRecords = records.filter(
    (record) => record[0] === String(i + 1)
  );

  for (let j = 0; j < Number(personCnt); j++) {
    const personPR = problemRecords.filter((pr) => pr[2] === persons[j]);
    if (personPR.length === 0) {
      score.set(persons[j], score.get(persons[j]) + Number(personCnt) + 1);
      tempScore.push(-1);
      continue;
    }
    if (personPR[0][3] === 'solve') {
      score.set(persons[j], score.get(persons[j]) + Number(personCnt) + 1);
      tempScore.push(-1);
      continue;
    }
    const startTime = personPR[0][1].split(':');
    let solveTime = personPR.find((ppr) => ppr[3] === 'solve');
    if (!solveTime) {
      score.set(persons[j], score.get(persons[j]) + Number(personCnt));
      tempScore.push(-1);
      continue;
    }
    solveTime = solveTime[1].split(':');
    tempScore.push(
      (solveTime[0] - startTime[0]) * 60 + solveTime[1] - startTime[1]
    );
  }
  const tempScoreAndName = [];
  persons.forEach((person, index) =>
    tempScoreAndName.push([person, tempScore[index]])
  );

  tempScoreAndName.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (b[1] > a[1]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
  });

  let rank = 1;
  for (let j = 0; j < personCnt; j++) {
    if (tempScoreAndName[j][1] !== -1) {
      score.set(
        tempScoreAndName[j][0],
        score.get(tempScoreAndName[j][0]) + rank
      );
      rank++;
    }
  }
}

const final = [...score];

console.log(
  final
    .sort((a, b) => {
      if (a[1] > b[1]) return 1;
      if (b[1] > a[1]) return -1;
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
    })
    .map((x) => x[0])
    .join('\n')
);
