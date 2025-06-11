// 시저_암호

function solution(s, n) {
  let answer = "";
  let arr = s.split("");

  arr.forEach((item) => {
    if (item !== " ") {
      let ascii = item.charCodeAt(0) + n;
      if (item >= "a" && item <= "z") {
        if (ascii - "a".charCodeAt(0) > 25) {
          ascii -= 26;
        }
      } else {
        if (ascii - "A".charCodeAt(0) > 25) {
          ascii -= 26;
        }
      }
      answer += String.fromCharCode(ascii);
    } else {
      answer += item;
    }
  });
  return answer;
}
