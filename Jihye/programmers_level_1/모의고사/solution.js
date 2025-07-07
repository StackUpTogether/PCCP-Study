// 모의고사

function solution(answers) {
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];

  for (let j = 0; j < answers.length; j++) {
    if (answers[j] === first[j % 5]) {
      count[0][1] += 1;
    }
    if (answers[j] === second[j % 8]) {
      count[1][1] += 1;
    }
    if (answers[j] === third[j % 10]) {
      count[2][1] += 1;
    }
  }

  count.sort((a, b) => b[1] - a[1]);
  if (count[0][1] === count[1][1]) {
    if (count[1][1] === count[2][1]) {
      return [1, 2, 3];
    } else {
      return [count[0][0], count[1][0]].sort((a, b) => a - b);
    }
  } else {
    return [count[0][0]];
  }
}
