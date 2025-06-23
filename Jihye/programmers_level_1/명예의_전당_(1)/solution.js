// 명예의_전당_(1)

function solution(k, score) {
  let answer = [];
  let records = [];
  for (let i = 0; i < score.length; i++) {
    records.push(score[i]);
    records.sort((a, b) => b - a);

    if (i < k) {
      answer.push(records[i]);
    } else {
      answer.push(records[k - 1]);
    }
  }

  return answer;
}
