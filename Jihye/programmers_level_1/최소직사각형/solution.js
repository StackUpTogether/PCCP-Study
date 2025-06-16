// 최소직사각형

function solution(sizes) {
  let arr = sizes.map((item) => {
    if (item[1] > item[0]) {
      let temp = item[1];
      item[1] = item[0];
      item[0] = temp;
    }
    return item;
  });
  let answer = 1;
  arr.sort((a, b) => b[0] - a[0]);
  answer *= arr[0][0];
  arr.sort((a, b) => b[1] - a[1]);
  answer *= arr[0][1];

  return answer;
}
