# 문자열 내 p와 y의 개수

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12916) 

## 🌱 문제 설명
대문자와 소문자가 섞여있는 문자열 s에서 'p'의 개수와 'y'의 개수를 비교하여 같으면 True, 다르면 False를 리턴하는 문제.

## 🤔 접근 방식
- 대문자와 소문자가 섞여있으므로 대문자 또는 소문자로 통일하여 비교
  ```js
  let charArr = s.toLowerCase().split("");
  ```
  소문자로 통일해준 후 배열 형식으로 만들어 `forEach`를 사용하여 조건문에서 갯수 비교.

## 💡 주요 포인트
- 문자열 s에는 p와 y가 아닌 알파벳도 포함됨