# 퍼즐 게임 챌린지

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/340212) 

## 🌱 문제 설명
`n`개의 퍼즐을 제한 시간 내에 풀어야 하는 퍼즐 게임이 있다. 각 퍼즐은 난이도와 소요 시간이 정해져 있으며, 숙련도에 따라 퍼즐을 풀 때 틀리는 횟수가 바뀐다. 현재 퍼즐의 난이도를 `diff`, 현재 퍼즐의 소요 시간을 `time_cur`, 이전 퍼즐의 소요 시간을 `time_prev`, 숙련도를 `level`이라고 할 때, 게임은 다음과 같이 진행된다.

- `diff` ≤ `level`이면 퍼즐을 틀리지 않고 `time_cur`만큼의 시간을 사용하여 해결한다.
- `diff` > `level`이면, 퍼즐을 총 `diff` - `level`번 틀리게 된다. 퍼즐을 틀릴 때마다, `time_cur`만큼의 시간을 사용하며, 추가로 `time_prev`만큼의 시간을 사용해 이전 퍼즐을 다시 풀고 와야 한다. 이전 퍼즐을 다시 풀 때는 이전 퍼즐의 난이도에 상관없이 틀리지 않는다. `diff` - `level`번 틀린 이후에 다시 퍼즐을 풀면 `time_cur`만큼의 시간을 사용하여 퍼즐을 해결한다.

퍼즐 게임에는 전체 제한 시간 `limit`가 정해져 있다. 제한 시간 내에 퍼즐을 모두 해결하기 위한 숙련도의 최솟값을 구하려고 한다. 난이도, 소요시간, 숙련도는 모두 양의 정수이다.

퍼즐의 난이도를 순서대로 담은 1차원 정수 배열 `diff`, 퍼즐의 소요 시간을 순서대로 담은 1차원 정수 배열 `times`, 전체 제한 시간 `limit`이 매개변수로 주어진다. 제한 시간 내에 퍼즐을 모두 해결하기 위한 숙련도의 최솟값을 정수로 return 하는 함수를 작성하는 문제.

## 🤔 접근 방식
- 각 퍼즐을 풀 때 `diff` ≤ `level` 이면 현재 퍼즐의 소요 시간(tc)을, `diff` > `level`이면 (diff - level) * (tc + tp) + tc 값을 총 걸리는 시간에 더해준다.
- 현재 level에서 총 걸리는 시간이 `limit`보다 작으면 최솟값과 level을 비교하여 최솟값을 정한다.

## 💡 주요 포인트
- 이중 for문만 사용하여 0부터 풀 때 총 걸리는 시간이 처음으로 limit보다 같거나 작아질 경우의 level이 최솟값이다.
- 하지만 위와 같이 풀면 limit이 커질 때 시간초과가 발생하게 된다.
- 따라서 이진 탐색 방법을 사용하여 해결.
- 퍼즐 해결 시간을 구하기 위한 `solvePuzzle` 함수를 따로 생성
  ```js
  function solvePuzzle(level, times, diffs) {
    let tc = times[1];
    let tp = times[0];
    let time = times[0];
    for (let j = 1; j < diffs.length; j++) {
      if (diffs[j] <= level) {
        time += tc;
      } else {
        time += (diffs[j] - level) * (tc + tp) + tc;
      }
      tp = tc;
      tc = times[j + 1];
    }
    return time;
  }
  ```
- 정답 반환 시 level 값은 양수여야 하므로, level이 0보다 작을 경우가 되는 경우 1을 반환.
  level이 2일 경우 총 걸리는 시간이 limit보다 작으면 다음 계산을 위해 정해지는 start, end가 0과 1이 되는데 이 상태에서 level이 0으로 잡히기 때문이다.