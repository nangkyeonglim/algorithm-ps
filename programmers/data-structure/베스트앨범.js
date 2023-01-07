function solution1(genres, plays) {
  let genreMap = new Map();
  for (let i = 0; i < genres.length; i += 1) {
    if (genreMap.has(genres[i]))
      return genreMap.get(genres[i]).push([plays[i], i]);
    return genreMap.set(genres[i], [[plays[i], i]]);
  }
  return [...genreMap]
    .map((x) => x[1])
    .sort(
      (a, b) =>
        b.reduce((x, y) => x + y[0], 0) - a.reduce((x, y) => x + y[0], 0)
    )
    .map((x) =>
      x
        .sort((a, b) => {
          if (a[0] > b[0]) return -1;
          if (a[0] < b[0]) return 1;
          if (a[1] > b[1]) return 1;
          if (a[1] < b[1]) return -1;
        })
        .slice(0, 2)
    )
    .map((x) => x.map((y) => y[1]))
    .flat();
}

// 리팩토링
function solution2(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, idx) => [genre, plays[idx]])
    .forEach(([genre, play], idx) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, idx }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genreMap]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.idx);
}
