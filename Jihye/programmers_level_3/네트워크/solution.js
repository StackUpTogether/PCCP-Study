// 네트워크

function solution(n, computers) {
  let answer = 0;

  let visited = Array(n).fill(false);

  let dfs = (index) => {
    visited[index] = true;

    for (let i = 0; i < n; i++) {
      if (computers[index][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++;
      dfs(i);
    }
  }

  return answer;
}
