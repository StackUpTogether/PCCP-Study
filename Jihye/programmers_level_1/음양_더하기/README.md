# 음양 더하기

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/76501) 

## 🌱 문제 설명
정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 주어질 때, 실제 정수들의 합을 구하여 return 하는 문제.

## 🤔 접근 방식
- 배열 `absolutes`를 반복문으로 돌리며 불리언 배열 값에 따라 덧셈 / 뺄셈
  ```js
    absolutes.forEach((item, index) =>
      signs[index] ? (answer += item) : (answer -= item)
    );
  ```

## 💡 주요 포인트
- 삼항연산자를 이용해 풀이 가능
- answer의 초기값을 주어야 한다.

