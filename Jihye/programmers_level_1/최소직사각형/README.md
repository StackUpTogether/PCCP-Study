# 최소직사각형

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/86491) 

## 🌱 문제 설명
모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어질 때, 모든 명함을 수납할 수 있는 가장 작은 지갑의 크기를 return 하는 문제.

지갑의 크기는 가로 길이 * 세로 길이 이다.


## 🤔 접근 방식
- 세로가 가로보다 길 경우 명함을 가로로 눕혀야 함 (가로 길이와 세로 길이를 서로 교체)

## 💡 주요 포인트
- 가로길이와 세로길이를 비교하여 가로가 무조건 세로보다 긴 배열을 작성
  ```js
  let arr = sizes.map((item) => {
    if (item[1] > item[0]) {
      let temp = item[1];
      item[1] = item[0];
      item[0] = temp;
    }
    return item;
  });
  ```
- 이후 `sort()`를 통해 제일 긴 가로 길이와 제일 긴 세로 길이를 곱해서 return.

