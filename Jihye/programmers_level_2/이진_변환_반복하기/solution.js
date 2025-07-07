// 이진_변환_반복하기

function removeZero(num) {
  let zero = 0;
  let removed = [];
  let numArr = num.split("").filter((item) => {
    if (item === "0") {
      zero++;
    } else {
      return item;
    }
  });
  removed = [numArr.length, zero];

  return removed;
}

function solution(s) {
  let answer = [];
  let [newNum, zeroCount] = [s, 0];
  let zeroTotal = 0;

  for (let i = 1; ; i++) {
    [newNum, zeroCount] = removeZero(String(newNum));
    zeroTotal += zeroCount;
    newNum = newNum.toString(2);

    if (newNum === "1") {
      answer.push(i);
      answer.push(zeroTotal);
      break;
    }
  }

  return answer;
}
