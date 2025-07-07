// 게임_맵_최단거리

function isInside(nodeX, nodeY, n, m) {
  if (nodeX < 0 || nodeX >= n) {
    return false;
  }
  if (nodeY < 0 || nodeY >= m) {
    return false;
  }
  return true;
}

function solution(maps) {
  let answer = -1;
  let n = maps.length;
  let m = maps[0].length;
  let queue = [[0, 0, 1]];
  let visited = Array.from({ length: n }, () => Array(m).fill(false));
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let min = n * m;

  for (;;) {
    let currentNode = queue.shift();
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

    if (currentNode[0] === n - 1 && currentNode[1] === m - 1) {
      if (min > currentNode[2]) {
        min = currentNode[2];
      }
      answer = min;
    }

    if (queue.length === 0) {
      break;
    }
  }

  return answer;
}
