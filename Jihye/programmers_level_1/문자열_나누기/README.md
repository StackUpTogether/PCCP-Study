# 문자열 나누기

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/140108) 

## 🌱 문제 설명
문자열 `s`가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 한다.

- 먼저 첫 글자를 읽는다. 이 글자를 x라고 한다.
- 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 센다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리한다.
- `s`에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복하며 남은 부분이 없다면 종료한다.
- 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료한다.

문자열 `s`가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수를 작성하는 문제.

## 🤔 접근 방식
- `s`를 `split` 하여 분리한 다음, `x`가 나오는 갯수와 다른 글자가 나오는 개수를 센다.
- 만약 `x` 갯수와 다른 글자의 갯수가 동일하면, `x`와 갯수들을 초기화한 다음 다시 세어준다.

## 💡 주요 포인트
- 1글자인 경우 바로 1을 return하도록 함.
  ```js
  if(s.length === 1) {
    return 1;
  }
  ```
- `x`는 `s`의 첫 글자로, 현재 읽는 문자의 인덱스를 나타내는 `index`는 바로 다음 인덱스인 1으로 초기화.
- 반복문을 돌리며 각각의 글자 수를 세어준다.
- 글자수가 같은 경우 `answer`를 1 증가시키며, `x`와 `index`를 다음 글자와 다다음 글자의 인덱스로 초기화.
  ```js
  for (let i = index; i < s.length; i++) {
    if (s[i] === x) {
      xCount++;
    } else {
      otherCount++;
    }
    if (xCount === otherCount) {
      answer++;
      x = s[i + 1];
      index = i + 1;
    }
  }
  ```
