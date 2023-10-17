function solution(sizes) {
  sizes.map((size) => size.sort((a, b) => a - b));
  const width = sizes.map((a) => a[0]);
  const height = sizes.map((b) => b[1]);

  return Math.max(...width) * Math.max(...height);
}
