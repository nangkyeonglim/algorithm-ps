function solution(s) {
  let check = [];

  [...s].forEach((char) => {
    check.at(-1) === '(' && char === ')' ? check.pop() : check.push(char);
  });
  return check.length ? false : true;
}
