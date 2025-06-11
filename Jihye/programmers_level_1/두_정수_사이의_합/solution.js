// 두_정수_사이의_합

function solution(a, b) {
  let answer = 0;

  if (a === b) {
    return a;
  }

  let big = b;
  let small = a;

  if (a > b) {
    big = a;
    small = b;
  }

  for (let i = small; i <= big; i++) {
    answer += i;
  }

  return answer;
}
