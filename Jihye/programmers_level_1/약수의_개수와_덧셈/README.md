# 약수의 개수와 덧셈

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/77884) 

## 🌱 문제 설명
두 정수 `left`와 `right`가 매개변수로 주어질 때, `left`와 `right` 까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 함수를 작성하는 문제.

## 🤔 접근 방식
- `left`와 `right` 사이의 수를 반복문으로 돌려서 약수의 개수를 구한 다음, 약수의 개수가 짝수인지 홀수인지 판별.

## 💡 주요 포인트
- 약수의 개수를 구하는 부분을 함수로 만들어 사용
  ```js
  function divisor(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }

    return count;
  }
  ```

