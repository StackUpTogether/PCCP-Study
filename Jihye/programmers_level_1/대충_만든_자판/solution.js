// 대충_만든_자판

function solution(keymap, targets) {
  let answer = [];

  for (let i = 0; i < targets.length; i++) {
    let target = targets[i].split("");
    let count = 0;

    for (let j = 0; j < target.length; j++) {
      let alpahbet = target[j];
      let min = 999;
      for (let k = 0; k < keymap.length; k++) {
        let index = keymap[k].indexOf(alpahbet);

        if (index !== -1 && index < min) {
          min = index;
        }
      }

      if (min === 999) {
        count = -1;
        break;
      }
      count += min + 1;
    }
    answer.push(count);
  }

  return answer;
}
