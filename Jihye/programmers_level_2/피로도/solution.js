// 피로도

function solution(k, dungeons) {
  let maxCount = 0;
  let visited = Array(dungeons.length).fill(false);

  let dfs = (kLeft, count) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && kLeft >= dungeons[i][0]) {
        visited[i] = true;
        dfs(kLeft - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }
    if (maxCount < count) {
      maxCount = count;
    }
  };

  dfs(k, 0);

  return maxCount;
}
