// 문자열_내_p와_y의_개수

function solution(s) {
  let charArr = s.toLowerCase().split("");
  let pCount = 0;
  let yCount = 0;

  charArr.forEach((item) => {
    if (item === "p") {
      pCount++;
    } else if (item === "y") {
      yCount++;
    }
  });

  return pCount === yCount ? true : false;
}
