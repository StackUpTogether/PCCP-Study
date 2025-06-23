// 두_개_뽑아서_더하기

function solution(numbers) {
  let setAnswer = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      setAnswer.add(numbers[i] + numbers[j]);
    }
  }

  let answerArr = Array.from(setAnswer).sort((a, b) => a - b);
  return answerArr;
}
