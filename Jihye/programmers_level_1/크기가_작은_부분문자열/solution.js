// 크기가_작은_부분문자열

function solution(t, p) {
  let answer = 0;

  for (let i = 0; ; i++) {
    if (i + p.length > t.length) break;
    if (Number(p) >= Number(t.slice(i, i + p.length))) {
      answer++;
    }
  }

  return answer;
}
