// 의상

function solution(clothes) {
  let answer = 1;

  let clothList = {};

  for (let i = 0; i < clothes.length; i++) {
    if (clothList[clothes[i][1]] === undefined) {
      clothList[clothes[i][1]] = 1;
    } else {
      clothList[clothes[i][1]] += 1;
    }
  }

  let clothArr = Object.entries(clothList);
  for (let i = 0; i < clothArr.length; i++) {
    answer *= clothArr[i][1] + 1;
  }

  answer = answer - 1;

  return answer;
}
