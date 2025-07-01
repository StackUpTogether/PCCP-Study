// 귤_고르기

function solution(k, tangerine) {
  let answer = 0;
  let tangerineMap = new Map();

  for (let i = 0; i < tangerine.length; i++) {
    if (tangerineMap.get(tangerine[i]) !== undefined) {
      tangerineMap.set(tangerine[i], tangerineMap.get(tangerine[i]) + 1);
    } else {
      tangerineMap.set(tangerine[i], 1);
    }
  }
  let tangerineArr = Array.from(tangerineMap);
  tangerineArr.sort((a, b) => b[1] - a[1]);
  let count = 0;

  for (let i = 0; tangerineArr.length; i++) {
    count += tangerineArr[i][1];
    answer++;
    if (count >= k) {
      break;
    }
  }

  return answer;
}
