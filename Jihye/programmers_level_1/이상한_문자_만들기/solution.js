// 이상한_문자_만들기

function solution(s) {
  let answer = "";
  let arr = s.split("");
  let count = 0;
  answer = arr
    .map((item) => {
      if (item === " ") {
        count = 0;
        return item;
      }

      if (count % 2 === 0) {
        count++;
        return item.toUpperCase();
      } else {
        count++;
        return item.toLowerCase();
      }
    })
    .join("");

  return answer;
}
