// 퍼즐_게임_챌린지

function solvePuzzle(level, times, diffs) {
  let tc = times[1];
  let tp = times[0];
  let time = times[0];
  for (let j = 1; j < diffs.length; j++) {
    if (diffs[j] <= level) {
      time += tc;
    } else {
      time += (diffs[j] - level) * (tc + tp) + tc;
    }
    tp = tc;
    tc = times[j + 1];
  }
  return time;
}

function solution(diffs, times, limit) {
  let start = 0;
  let end = 1000000;
  let level = Math.floor((start + end) / 2);
  let min = 1000000;

  for (;;) {
    let puzzleTime = solvePuzzle(level, times, diffs);
    if (puzzleTime <= limit) {
      end = level - 1;
      if (level < min) {
        min = level;
      }
    } else {
      start = level + 1;
    }
    level = Math.floor((start + end) / 2);

    if (level < 0) return 1;
    if (start > end) return min;
  }
}
