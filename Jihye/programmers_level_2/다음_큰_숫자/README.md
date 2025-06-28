# 다음 큰 숫자

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12911) 

## 🌱 문제 설명
자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의된다.

- n의 다음 큰 숫자는 n보다 큰 자연수이다.
- n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같다.
- n의 다음 큰 숫자는 위의 조건을 모두 만족하는 수 중 가장 작은 수이다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return하는 함수를 작성하는 문제.

## 🤔 접근 방식
- 이진수 변환 함수인 `toString(2)`를 사용.
- n+1부터 시작하여 조건에 만족하는 숫자가 나올때까지 반복

## 💡 주요 포인트
- 이진수로 변환하고 나서 1의 갯수가 n의 이진수 변환 시 1의 갯수와 같으면 해당 수를 반환한다.
  ```js
  if (
    answer
      .toString(2)
      .split("")
      .filter((item) => item !== "0").length === oneCount
  ) {
    return answer;
  } else {
    answer++;
  }
  ```

