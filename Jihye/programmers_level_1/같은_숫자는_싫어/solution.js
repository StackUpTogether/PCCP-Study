// 같은_숫자는_싫어

function solution(arr) {
  let answer = [];

  arr.forEach((item) => {
    answer[answer.length - 1] !== item && answer.push(item);
  });

  return answer;
}
