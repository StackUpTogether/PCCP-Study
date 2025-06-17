// 과일_장수

function solution(k, m, score) {
  var answer = 0;

  score.sort((a, b) => a - b);

  for (let i = score.length - m; i >= 0; i -= m) {
    answer += score[i] * m;
  }

  return answer;
}
