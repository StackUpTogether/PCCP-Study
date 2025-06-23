// 최대공약수와_최소공배수

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(n, m) {
  let answer = [];
  answer.push(gcd(n, m));
  answer.push(lcm(n, m));
  return answer;
}
