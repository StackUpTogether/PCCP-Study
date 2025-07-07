// 다음_큰_숫자

function solution(n) {
  let answer = n + 1;
  let oneCount = n
    .toString(2)
    .split("")
    .filter((item) => item !== "0").length;

  for (;;) {
    if (
      answer
        .toString(2)
        .split("")
        .filter((item) => item !== "0").length === oneCount
    ) {
      return answer;
    } else {
      answer++;
    }
  }
}
