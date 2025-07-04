// 괄호_회전하기

function solution(s) {
  let answer = 0;
  let sArr = s.split("");
  let stack = [];

  if (sArr.length % 2 !== 0) return 0;

  for (let i = 0; i < sArr.length; i++) {
    let temp = sArr.shift();
    sArr.push(temp);
    let isRight = true;

    for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] === "(" || sArr[i] === "{" || sArr[i] === "[") {
        stack.push(sArr[i]);
      } else {
        if (
          !(
            (sArr[i] === ")" && stack[stack.length - 1] === "(") ||
            (sArr[i] === "}" && stack[stack.length - 1] === "{") ||
            (sArr[i] === "]" && stack[stack.length - 1] === "[")
          )
        ) {
          isRight = false;
          break;
        } else {
          stack.pop();
        }
      }
    }
    if (isRight) answer++;
  }

  return answer;
}
