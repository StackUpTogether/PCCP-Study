// 최댓값과_최솟값

function solution(s) {
  let answer = [];

  let strArr = s
    .split(" ")
    .map((item) => Number(item))
    .sort((a, b) => a - b);

  answer.push(strArr[0], strArr[strArr.length - 1]);
  return answer.join(" ");
}
