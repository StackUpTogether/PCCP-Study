# 둘만의 암호

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/155652) 

## 🌱 문제 설명
두 문자열 `s`와 `skip` 그리고 자연수 `index`가 주어질 때, 다음 규칙에 따라 문자열을 만들려 한다.

- 문자열 `s`의 각 알파벳을 `index` 만큼 뒤의 알파벳으로 바꿔준다.
- `index` 만큼의 뒤의 알파벳이 `z`를 넘어갈 경우 다시 `a`로 돌아간다.
- `skip`에 있는 알파벳은 제외하고 건너뛴다.

위 규칙대로 `s`를 변환한 결과를 return 하는 함수를 작성하는 문제.

## 🤔 접근 방식
- skip에 있는 알파벳들을 제외한 알파벳 배열을 만들어 index만큼 건너뛰도록 함.

## 💡 주요 포인트
- skip에 포함되어 있는 알파벳을 없애기 위해 `filter` 사용
  ```js
  alphabet = alphabet.filter((item) => !skip.includes(item));
  ```
- 맨 마지막 값보다 클 경우 앞으로 돌아가야 하는데, `-`가 아닌 나머지 연산으로 인덱스를 구해야 한다.
  ```js
  if(newIndex < alphabet.length) {
    answer.push(alphabet[newIndex])
  } else {
    answer.push(alphabet[newIndex % alphabet.length]);
  }
  ```
  빼기 연산을 할 경우 newIndex보다 알파벳 배열 길이가 길면 음수가 되어버리기 때문이다.
