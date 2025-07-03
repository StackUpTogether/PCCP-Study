// 영어_끝말잇기

function solution(n, words) {
  let answer = [0, 0];
  let personNum = 0;
  let prevLast = words[0].slice(-1);
  let used = [words[0]];

  for (let i = 1; i < words.length; i++) {
    personNum = i % n;

    if (words[i].slice(0, 1) !== prevLast || used.includes(words[i])) {
      return [personNum + 1, Math.floor(i / n) + 1];
    } else {
      used.push(words[i]);
      prevLast = words[i].slice(-1);
    }
  }

  return answer;
}
