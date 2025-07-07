// 덧칠하기

function solution(n, m, section) {
  let answer = 0;

  let paintArr = new Array(n + 1).fill(0);

  for (let i = 0; i < section.length; i++) {
    let index = section[i];
    if (paintArr[index] === 0) {
      for (let j = index; j < index + m; j++) {
        if (j > n) break;
        paintArr[j] = 1;
      }
      answer++;
    }
  }

  return answer;
}
