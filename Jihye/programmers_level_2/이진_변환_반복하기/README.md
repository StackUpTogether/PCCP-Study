# 이진 변환 반복하기

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/70129) 

## 🌱 문제 설명
0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의한다.

1. x의 모든 0을 제거한다.
2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꾼다.

0과 1로 이루어진 문자열 s가 매개변수로 주어진다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하는 함수를 작성하는 문제.

## 🤔 접근 방식
- 이진수로 변환시켜주는 `toString(2)`를 사용한다.
- 0을 제거하면서 제거한 갯수를 세는 함수를 따로 만든다.

## 💡 주요 포인트
- 0 제거를 위해 `filter`를 사용
  ```js
  let numArr = num.split("").filter((item) => {
    if (item === "0") {
      zero++;
    } else {
      return item;
    }
  });
  ```
- 이진수 변환을 위해 이미 있는 함수인 `toString()`을 사용
  ```js
  newNum = newNum.toString(2);
  ```
