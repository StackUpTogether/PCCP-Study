// 멀리_뛰기

function solution(n) {
  let answer = 0;
  let prev2 = 1;
  let prev = 2;

  if (n === 1) return 1;
  if (n === 2) return 2;

  for (let i = 3; i <= n; i++) {
    answer = (prev + prev2) % 1234567;
    prev2 = prev % 1234567;
    prev = answer % 1234567;
  }

  return answer;
}
