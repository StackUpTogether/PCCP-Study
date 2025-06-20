# K번째수

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/42748) 

## 🌱 문제 설명
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하는 함수를 작성하는 문제.

ex) array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]

1에서 나온 배열을 정렬하면 [2, 3, 5, 6]

2에서 나온 배열의 3번째 숫자는 5

## 🤔 접근 방식
- `commands` 배열의 길이만큼 반복문 사용
- `split()`을 사용하여 배열을 자른 다음, `sort()`로 정렬하여 k번째 숫자를 구함. 

## 💡 주요 포인트
- `sort()`는 문자열 기준이기 때문에 그냥 정렬을 시키면 `10` 과 같은 숫자가 `2` 와 같은 숫자보다 앞에 오는 상황이 발생하므로 다음과 같이 명시해 주어야 한다.
  ```js
    sort((a, b) => a - b)
  ```

