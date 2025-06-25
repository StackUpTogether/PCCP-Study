# 옹알이 (2)

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/133499) 

## 🌱 문제 설명
머쓱이의 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하며, 연속해서 같은 발음을 할 수 없다.

문자열 배열 `babbling`이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return 하는 함수를 작성하는 문제.

## 🤔 접근 방식
- 발음을 할 수 있는 문자들을 배열로 만든 후, 주어진 문자열 배열을 하나씩 떼어 발음 가능한 문자인지 판별한다.

## 💡 주요 포인트
- 주어진 문자열 배열 `babbling`의 단어들을 `split`하여 앞에서부터 `words`에 하나씩 더해가면서 발음 가능한 문자열인지 판별.
  ```js
  let speakable = ['aya', 'ye', 'woo', 'ma'];
  ```
- 발음이 가능한 경우 `beforeWords`에 저장하고, `words`를 초기화 한 후 다시 하나씩 더해준다.
- 발음이 가능하지만 `beforeWords`와 `words`가 같은 경우 발음 불가능으로 판별하여 `canSpeak`를 `false`로 변경.
- 발음이 가능하지 않은 경우 `canSpeak`를 `false`로 변경.
- `canSpeak`가 `true`인 경우에만 answer를 1 증가시킨다.

