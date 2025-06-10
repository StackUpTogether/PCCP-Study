# 같은 숫자는 싫어

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12906) 

## 🌱 문제 설명
숫자 0부터 9까지로 이루어진 배열 arr에서 연속적으로 나타나는 숫자를 하나만 남기고 전부 제거. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 하는 문제.

## 🤔 접근 방식
- 입력받은 배열을 `forEach`문을 사용하여 하나씩 비교
- `answer` 배열의 맨 마지막 값과 비교하여 다른 경우만 `answer` 배열에 추가
  ```js
  arr.forEach((item) => {
    answer[answer.length - 1] !== item && answer.push(item);
  });
  ```

## 💡 주요 포인트
- 맨 처음에 배열의 길이가 0이기 때문에 `answer[-1]`의 값인 `undefined`와 `item` 이 비교되어 첫 숫자는 자동으로 추가됨. 
- js에서 배열에 존재하지 않는 인덱스를 넣는 경우 일반 객체 속성처럼 동작하여 존재하지 않는 속성인 `undefined`를 반환하기 때문에 위와 같이 사용이 가능하다.
