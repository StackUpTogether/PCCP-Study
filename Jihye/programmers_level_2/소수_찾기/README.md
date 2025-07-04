# 소수 찾기

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/42839) 

## 🌱 문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 한다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하는 함수를 작성하는 문제.

단, 제한사항은 다음과 같다.

- numbers는 길이 1 이상 7 이하인 문자열이다.
- numbers는 0~9까지 숫자만으로 이루어져 있다.
- "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미이다.

## 🤔 접근 방식
- 깊이우선탐색 DFS를 사용하여 맨 앞 숫자부터 선택한 후 가능한 모든 숫자를 만든다.
- 만들어진 숫자를 소수인지 판별한다.

## 💡 주요 포인트
- 숫자가 소수인지 판별하는 함수 작성
  ```js
  function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  ```
- dfs를 이용하여 모든 숫자를 만들어본다.
  ```js
  let dfs = (arr, fixed) => {
    let num = parseInt(fixed);
    if (fixed.length > 0) {
      if (isPrime(num) && !totalArr.includes(num)) {
        totalArr.push(num);
      }
    }

    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        let tempArr = [...arr];
        tempArr.splice(i, 1);
        dfs(tempArr, fixed + arr[i]);
      }
    }
  };
  ```
  이 때, totalArr에 이미 들어가있는지도 같이 판별하여 중복되는 숫자가 없도록 하며, splice를 통해 중간에 사용된 숫자를 제거해준다.

