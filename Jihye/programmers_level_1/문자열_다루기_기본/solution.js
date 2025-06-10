// 문자열_다루기_기본

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (s[i] < "0" || s[i] > "9") {
        return false;
      }
    }
    return true;
  }
}
