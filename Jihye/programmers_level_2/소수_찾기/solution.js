// 소수_찾기

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(numbers) {
  let answer = 0;
  let numberArr = numbers.split("");
  let totalArr = [];

  let dfs = (arr, fixed) => {
    let num = parseInt(fixed);
    if (fixed.length > 0) {
      if (isPrime(num) && !totalArr.includes(num)) {
        totalArr.push(num);
      }
    }

    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        let tempArr = [...arr];
        tempArr.splice(i, 1);
        dfs(tempArr, fixed + arr[i]);
      }
    }
  };

  dfs(numberArr, "");

  answer = totalArr.length;

  return answer;
}
