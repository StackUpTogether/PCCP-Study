# 가장 가까운 같은 글자

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/142086) 

## 🌱 문제 설명
문자열 `s`가 주어졌을 때, `s`의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 몇 칸 떨어져 있는지 위치를 담을 배열을 구하는 문제.

ex) `s= "banana"` 일 때 맨 처음 나온 글자들은 -1, 나머지 글자들은 자신과 몇 칸 떨어졌는지 세어 넣는다. 따라서 반환값은 [-1, -1, -1, 2, 2, 2]가 된다.

## 🤔 접근 방식
- 문자열 `s`를 배열로 만든 후 반복문으로 돌린다.
- 마지막으로 나온 알파벳의 위치를 담을 이차원 배열을 생성하여 마지막 등장 위치를 저장한다.

## 💡 주요 포인트
- `a`부터 `z`까지 26개의 알파벳이므로 길이 26의 이차원 배열을 생성하여 `-1`로 초기화 (a가 0, z가 25)
  ```js
  let charArr = Array.from(new Array(26), () => new Array(1).fill(-1));
  ```
- 반복문 내에서 `현재 알파벳의 인덱스 값`을 구하기 위해 현재 알파벳 아스키코드 값에서 a의 아스키코드 값을 뺌
- 알파벳이 처음 나온 경우 answer에 -1을 넣고, 해당 알파벳의 현재 위치로 배열 업데이트.
- 이미 나온 알파벳이 있을 경우 현재 위치와의 차이를 구해 answer에 넣음.
