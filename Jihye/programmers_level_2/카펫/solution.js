// 카펫

function solution(brown, yellow) {
  let answer = [];

  for (let i = 3; i < 5000; i++) {
    for (let j = 3; j <= i; j++) {
      if (i * j - (i - 2) * (j - 2) === brown && (i - 2) * (j - 2) === yellow) {
        return [i, j];
      }
    }
  }

  return answer;
}
