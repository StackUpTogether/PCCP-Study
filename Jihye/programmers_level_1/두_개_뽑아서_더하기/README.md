# 두 개 뽑아서 더하기

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/68644) 

## 🌱 문제 설명
정수 배열 `numbers`가 주어질 때 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하는 함수를 작성하는 문제.

## 🤔 접근 방식
- 이중 for문을 사용해서 모든 수를 계산
- `set`을 사용하여 중복 제거

## 💡 주요 포인트
- `set`을 사용하여 중복이 없도록 만든 다음 `Array.from()`을 이용하여 다시 배열로 변경
- `sort()` 할 때 문자열 기준으로 정렬되지 않게 신경쓰기
  ```js
  let answerArr = Array.from(setAnswer).sort((a, b) => a - b);
  ```

