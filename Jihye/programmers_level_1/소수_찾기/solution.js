// 소수_찾기

function solution(n) {
  let answer = 0;
  let isPrime = new Array(n + 1).fill(true);

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      answer++;
      for (let j = 2 * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return answer;
}
