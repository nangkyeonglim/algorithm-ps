const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const [cntOfFiles, cntOfExtension] = input[0].split(' ').map(Number);

const files = input.slice(1, cntOfFiles + 1).map((x) => x.split('.'));
const extensions = new Set(input.slice(cntOfFiles + 1));

const sortFiles = (a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  if (extensions.has(a[1]) && !extensions.has(b[1])) return -1;
  if (!extensions.has(a[1]) && extensions.has(b[1])) return 1;
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
};

files.sort(sortFiles);
console.log(files.map((x) => x.join('.')).join('\n'));
