# 게임 맵 최단거리

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/1844) 

## 🌱 문제 설명
게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하는 함수를 작성하는 문제.

단, 제한사항은 아래와 같다.

- maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열로, n과 m은 각 1 이상 100 이하의 자연수이다.
  - n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 도무 1인 경우는 입력으로 주어지지 않는다.
- maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타낸다.
- 처음에 캐릭터는 게임 맵의 좌측 상단인 (1,1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n,m) 위치에 있다.
- 상대 팀 진영에 도착할 수 없을 때는 -1을 return 한다.

## 🤔 접근 방식
- BFS 방식으로 해결할 수 있다.

## 💡 주요 포인트
- 방문할 노드들의 배열인 `queue`를 정의하고, 첫 번째 노드를 넣는다. 이 때, 최소 거리를 구해야 하므로 `[x좌표, y좌표, 거리]`를 넣어준다.
- 방문 여부를 판단할 visited 이차원 배열을 작성한다.
- 앞뒤양옆으로 1칸씩 움직일 `direction`배열을 작성한다.
- 반복문을 돌면서, `queue`에 있는 노드를 맨 앞부터 빼서 방문여부, 1칸씩 움직였을 때의 맵에서 벗어나는지에 대한 여부를 판단한다. 만약 맵에서 벗어나지 않고, 방문하지 않은 노드를 방문하게 된다면 다음으로 방문하게 될 노드를 큐에 넣는다. (거리도 1을 증가시킨다)
  ```js
  if (!visited[currentNode[0]][currentNode[1]]) {
    visited[currentNode[0]][currentNode[1]] = true;
    for (let i = 0; i < 4; i++) {
      if (
        isInside(
          currentNode[0] + direction[i][0],
          currentNode[1] + direction[i][1],
          n,
          m
        ) &&
        maps[currentNode[0] + direction[i][0]][
          currentNode[1] + direction[i][1]
        ] === 1
      ) {
        queue.push([
          currentNode[0] + direction[i][0],
          currentNode[1] + direction[i][1],
          currentNode[2] + 1,
        ]);
      }
    }
    maps[currentNode[0]][currentNode[1]] = 0;
  }
  ```
  마지막으로 이미 지나온 자리를 0으로 바꾸어 다음 이동 시 해당 노드로 가지 않도록 한다.
- 만약에 상대 팀 진영에 도착했다면 최소 이동거리인지를 판별한다.
  ```js
  if (currentNode[0] === n - 1 && currentNode[1] === m - 1) {
    if (min > currentNode[2]) {
      min = currentNode[2];
    }
    answer = min;
  }
  ```
- 큐에 더이상 뺄 노드가 없으면 종료한다.

