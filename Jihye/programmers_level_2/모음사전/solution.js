// 모음사전

function solution(word) {
  let answer = 0;
  let charArr = ["A", "E", "I", "O", "U"];
  let visited = Array(5).fill(false);
  let dictionary = [];

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

  dfs(charArr, "", 0);

  answer = dictionary.indexOf(word) + 1;
  return answer;
}
