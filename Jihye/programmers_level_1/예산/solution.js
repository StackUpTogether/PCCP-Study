// 예산

function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] < 0) {
      return answer;
    } else {
      budget -= d[i];
      answer++;
    }
  }
  return answer;
}
