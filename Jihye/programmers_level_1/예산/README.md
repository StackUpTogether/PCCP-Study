# 예산

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12982) 

## 🌱 문제 설명
부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하는 함수를 작성하는 문제.

단, 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 주어야 한다.

## 🤔 접근 방식
- 배열을 정렬시킨 후 앞에서부터 지원해준다.

## 💡 주요 포인트
- `sort()`를 사용할 때, 그냥 사용할 경우 문자열 순서대로 정렬되기 때문에 다음과 같이 사용.
  ```js
  d.sort((a, b) => a - b);
  ```
- 정렬된 배열을 반복문으로 돌리며 budget에서 뺄 때 음수가 되지 않으면 `answer`를 1 증가시킨다.

