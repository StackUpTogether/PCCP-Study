// 기사단원의_무기

function primeCount(n) {
  let count = 0;
  if (n === 1) return 1;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i * i === n) {
        count++;
      } else {
        count += 2;
      }
    }
  }
  return count;
}

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let primes = primeCount(i);
    if (primes > limit) {
      answer += power;
    } else {
      answer += primes;
    }
  }
  return answer;
}
