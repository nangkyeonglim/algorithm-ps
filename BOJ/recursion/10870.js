const n = Number(require('fs').readFileSync(0, 'utf-8').trim());

const fibonacci = (n) => {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(n));
