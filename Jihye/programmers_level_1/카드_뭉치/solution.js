// 카드_뭉치

function solution(cards1, cards2, goal) {
  let answer = "Yes";
  let index1 = -1;
  let index2 = -1;

  for (let i = 0; i < goal.length; i++) {
    let hasWord1 = cards1.indexOf(goal[i]);
    let hasWord2 = cards2.indexOf(goal[i]);

    if (hasWord1 === -1 && hasWord2 === -1) {
      answer = "No";
      break;
    } else if (hasWord1 !== -1 && index1 + 1 === hasWord1) {
      index1 = hasWord1;
    } else if (hasWord2 !== -1 && index2 + 1 === hasWord2) {
      index2 = hasWord2;
    } else {
      answer = "No";
      break;
    }
  }

  return answer;
}
