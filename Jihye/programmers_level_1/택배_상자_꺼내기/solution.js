// 택배_상자_꺼내기

//1번 풀이
function solution(n, w, num) {
  let totalStacks = Array(w).fill(Math.floor(n/w));
  let remains = n%w;
  let targetFloor = Math.floor((num-1)/w)+1;
  let targetRemains = num%w === 0 ? w-1 : num%w - 1;
  
  if(Math.floor(n/w) % 2 !== 0) {
      for(let i=w-1; i>=w-remains; i--) {
          totalStacks[i] += 1;
      }
  } else {
      for(let i=0; i<remains; i++) {
          totalStacks[i] += 1;
      }
  }
  
  if(totalStacks[targetRemains] === targetFloor) {
      return 1;
  }
  
  if(targetFloor % 2 === 0) {
      return totalStacks[w-targetRemains-1] - targetFloor + 1;
  } else {
      return totalStacks[targetRemains] - targetFloor + 1;
  }
}

//2번 풀이
function solution(n, w, num) {
  let arr = [];
  let count = 1;
  let x = 0;
  let y = 0;

  for (let i = 0; i < Math.ceil(n / w); i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      if (count > n) {
        row.push(null);
      } else {
        row.push(count);
      }
      if (count === num) {
        x = Math.ceil(count / w) % 2 === 0 ? w - j - 1 : j;
        y = i;
      }
      count++;
    }

    if (i % 2 === 1) {
      row.reverse();
    }
    arr.push(row);
  }

  if (y === arr.length - 1) return 1;

  if (arr[arr.length - 1][x] === null) {
    return arr.length - y - 1;
  } else {
    return arr.length - y;
  }
}
