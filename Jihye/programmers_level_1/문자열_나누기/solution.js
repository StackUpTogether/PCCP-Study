// 문자열_나누기

function solution(s) {
  let answer = 0;
  s.split("");

  let x = s[0];
  let index = 1;
  let xCount = 1;
  let otherCount = 0;

  if (s.length === 1) {
    return 1;
  }

  for (let i = index; i < s.length; i++) {
    if (s[i] === x) {
      xCount++;
    } else {
      otherCount++;
    }
    if (xCount === otherCount) {
      answer++;
      x = s[i + 1];
      index = i + 1;
    }
  }
  if (index < s.length) answer++;
  return answer;
}
