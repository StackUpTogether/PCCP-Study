# 단어 변환

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/43163?language=javascript) 

## 🌱 문제 설명
두 개의 단어 begin, target과 단어의 집합 words가 있다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 한다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있다.
2. words에 있는 단어로만 변환할 수 있다.

예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성하는 문제. 단, 제한사항은 아래와 같다.

- 각 단어는 알파벳 소문자로만 이루어져 있다.
- 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같다.
- words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없다.
- begin과 target은 같지 않다.
- 변환할 수 없는 경우에는 0를 return 한다.

## 🤔 접근 방식
- dfs를 사용하여 풀이

## 💡 주요 포인트
- 단어를 비교하여 변경 가능 여부를 반환하는 함수인 `changeWord`를 작성한다.
  ```js
  function changeWord(word, cWord) {
    let wordArr = word.split("");
    let cWordArr = cWord.split("");
    let count = 0;

    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i] === cWordArr[i]) {
        count++;
      }
    }

    if (count !== wordArr.length - 1) {
      return false;
    }
    return true;
  }
  ```
  단, 단어를 비교했을 때 다른 글자가 1개여야 변환이 가능하므로, 같은 글자 수가 알파벳 개수에서 1을 뺀 것보다 작으면 변경이 불가하므로 `false`를 반환한다.
- dfs를 돌리면서 현재 단어가 다음 단어로 바뀔 수 있는 경우 dfs를 진행시키고 count 수를 증가시킨다.
  ```js
  let dfs = (word, count) => {
    if (word === target) {
      if (minCount === 0 || minCount > count) {
        minCount = count;
      }
    }

    for (let i = 0; i < words.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        if (changeWord(word, words[i])) {
          dfs(words[i], count + 1);
        }
        visited[i] = false;
      }
    }
  };
  ```
  현재 단어가 `target` 단어와 같으면, 변경 횟수를 비교하여 최소 변경 횟수를 갱신한다. 단, minCount가 0일때에도 새로 갱신해준다.