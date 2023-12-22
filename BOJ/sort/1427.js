const input = require('fs').readFileSync('input.txt').toString().trim();

console.log([...input].sort((a, b) => b - a).join(''));
