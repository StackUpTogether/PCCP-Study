// 옹알이 (2)

function solution(babbling) {
  let answer = 0;
  let speakable = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let babblingChars = babbling[i].split("");
    let words = "";
    let beforeWords = "";
    let canSpeak = false;

    for (let j = 0; j < babblingChars.length; j++) {
      words += babblingChars[j];

      if (speakable.includes(words) && beforeWords !== words) {
        beforeWords = words;
        words = "";
        canSpeak = true;
      } else {
        canSpeak = false;
      }
    }
    if (canSpeak) answer++;
  }
  return answer;
}
