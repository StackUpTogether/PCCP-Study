// 하샤드_수

function solution(x) {
  let sum = 0;
  x.toString()
    .split("")
    .forEach((item) => (sum += Number(item)));

  return x % sum === 0 ? true : false;
}
