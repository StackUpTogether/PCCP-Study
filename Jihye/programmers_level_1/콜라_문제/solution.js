// 콜라_문제

function solution(a, b, n) {
  let answer = 0;
  let haveCoke = n;
  while (haveCoke >= a) {
    let giveCoke = Math.floor(haveCoke / a) * a;
    let getCoke = Math.floor(haveCoke / a) * b;

    haveCoke = haveCoke - giveCoke + getCoke;
    answer += getCoke;
  }

  return answer;
}
