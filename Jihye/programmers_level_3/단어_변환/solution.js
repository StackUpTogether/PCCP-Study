// 단어_변환

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

function solution(begin, target, words) {
  let minCount = 0;

  let visited = Array(words.length).fill(false);

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

  dfs(begin, 0);

  return minCount;
}
