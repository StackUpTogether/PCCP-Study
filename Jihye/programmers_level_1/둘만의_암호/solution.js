// 둘만의_암호

function solution(s, skip, index) {
  let answer = [];
  let alphabet = [];
  let sArr = s.split("");

  for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode("a".charCodeAt(0) + i));
  }

  alphabet = alphabet.filter((item) => !skip.includes(item));

  for (let i = 0; i < sArr.length; i++) {
    let newIndex = alphabet.indexOf(sArr[i]) + index;
    if (newIndex < alphabet.length) {
      answer.push(alphabet[newIndex]);
    } else {
      answer.push(alphabet[newIndex % alphabet.length]);
    }
  }

  return answer.join("");
}
