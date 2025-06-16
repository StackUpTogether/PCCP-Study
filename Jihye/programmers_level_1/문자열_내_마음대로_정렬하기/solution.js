// 문자열_내_마음대로_정렬하기

function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    }
    if (a[n] < b[n]) {
      return -1;
    }
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
  });

  return strings;
}
