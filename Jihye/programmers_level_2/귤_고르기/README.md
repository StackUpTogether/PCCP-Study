# 귤 고르기

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/138476) 

## 🌱 문제 설명
수확한 귤 중 `k`개를 골라 상자 하나에 담아 판매하려고 한다. 단, 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화해야 한다.

ex)
수확한 귤 8개의 크기가 [1, 3, 2, 5, 4, 5, 2, 3] 일 경우 귤 6개를 판매하고 싶다면 크기가 1, 4인 귤을 제외한 여섯개의 귤을 담으면 귤의 크기의 종류가 2, 3, 5로 총 3가지가 되며 이때가 서로 다른 종류가 최소일 때이다.

한 상자에 담으려는 귤의 개수 `k`와 귤의 크기를 담은 배열 `tangerine`이 매개변수로 주어질 때, 귤 `k`개를 고르는 경우 서로 다른 종류의 수의 최솟값을 return 하는 함수를 작성하는 문제.

## 🤔 접근 방식
- 귤을 크기별로 몇 개인지 구한 다음, 갯수가 많은 것 부터 담아서 k보다 크거나 같을 때의 종류의 수를 구한다.

## 💡 주요 포인트
- `tangerine`의 원소가 10,000,000보다 작거나 같기 때문에 Map을 사용하여 귤의 크기와 크기별 갯수를 저장한다.
  ```js
  for (let i = 0; i < tangerine.length; i++) {
    if (tangerineMap.get(tangerine[i]) !== undefined) {
      tangerineMap.set(tangerine[i], tangerineMap.get(tangerine[i]) + 1);
    } else {
      tangerineMap.set(tangerine[i], 1);
    }
  }
  ```
- Map을 배열로 바꾸어 `sort`를 사용하여 갯수가 많은 순서대로 정렬한다.
  ```js
  let tangerineArr = Array.from(tangerineMap);
  tangerineArr.sort((a, b) => b[1] - a[1]);
  ```
- 반복문을 통해 담은 귤의 갯수를 세며, 담긴 귤의 총 갯수가 k보다 크거나 같을 경우 반복문을 종료한다.
  ```js
  for (let i = 0; tangerineArr.length; i++) {
    count += tangerineArr[i][1];
    answer++;
    if (count >= k) {
      break;
    }
  }
  ```

