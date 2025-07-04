# 모음사전

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/84512) 

## 🌱 문제 설명
사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있다. 사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"이다.

단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하는 함수를 작성하는 문제.

단, 제한사항은 아래와 같다.

- word의 길이는 1 이상 5 이하이다.
- word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있다.

## 🤔 접근 방식
- 완전탐색 DFS 방법으로 사전의 모든 단어를 만든 후, 주어진 단어가 몇 번째 단어인지 확인한다.

## 💡 주요 포인트
- 주어진 알파벳 모음을 담은 배열을 생성하여 해당 배열으로 DFS를 돌린다.
- 방문 여부를 확인할 `visited` 배열을 작성한다.
- count를 변수로 넣어 총 길이가 5가 되기 전까지는 `visited`를 true로 바꾸지 않고 dfs를 돌린다.
  ```js
  let dfs = (arr, fixed, count) => {
    if (fixed.length > 0) {
      dictionary.push(fixed);
    }
    for (let i = 0; i < arr.length; i++) {
      let tempArr = [...arr];
      if (!visited[i] && count < 5) {
        if (count === 4) {
          visited[i] = true;
          dfs(tempArr, fixed + arr[i], count + 1);
          visited[i] = false;
        } else {
          dfs(tempArr, fixed + arr[i], count + 1);
        }
      }
    }
  };
  ```
  총 길이가 5가 된 경우 (0부터 4까지 count가 돌아간 경우) visited를 true로 바꾸고 dfs를 돌려주고, 백트래킹을 해 준다.
- 만들어진 사전 배열에서 `word`의 인덱스를 찾은 후 1을 더해 반환한다.
  ```js
  answer = dictionary.indexOf(word) + 1;
  ```