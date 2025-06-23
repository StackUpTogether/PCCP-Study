// 푸드_파이트_대회

function solution(food) {
  let answer = [];

  for (let i = 1; i < food.length; i++) {
    if (food[i] >= 2) {
      let count = Math.floor(food[i] / 2);
      for (let j = 0; j < count; j++) {
        answer.push(i);
      }
    }
  }

  return answer.join("") + "0" + answer.reverse().join("");
}
