// 가장_가까운_같은_글자

function solution(s) {
  let answer = [];
  let charArr = Array.from(new Array(26), () => new Array(1).fill(-1));

  s.split("").forEach((item, index) => {
    let indexOfS = item.charCodeAt(0) - "a".charCodeAt(0);

    if (charArr[indexOfS][0] === -1) {
      charArr[indexOfS][0] = index;
      answer.push(-1);
    } else {
      answer.push(index - charArr[indexOfS][0]);
      charArr[indexOfS][0] = index;
    }
  });

  return answer;
}
