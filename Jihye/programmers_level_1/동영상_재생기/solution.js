// 동영상_재생기

function isInOp(startArr, endArr, arr) {
  if (endArr[0] < arr[0] || (endArr[0] === arr[0] && endArr[1] < arr[1])) {
    return false;
  }
  if (
    startArr[0] > arr[0] ||
    (startArr[0] === arr[0] && startArr[1] > arr[1])
  ) {
    return false;
  }
  return true;
}

function moveNext(arr, endArr) {
  if (arr[1] + 10 >= 60) {
    arr[1] = arr[1] + 10 - 60;
    arr[0] += 1;
  } else {
    arr[1] += 10;
  }

  if (arr[0] > endArr[0]) {
    return [endArr[0], endArr[1]];
  }
  if (arr[0] === endArr[0] && arr[1] >= endArr[1]) {
    return [endArr[0], endArr[1]];
  }

  return arr;
}

function movePrev(arr) {
  if (arr[1] - 10 < 0) {
    arr[1] = arr[1] - 10 + 60;
    arr[0] -= 1;
  } else {
    arr[1] -= 10;
  }

  if (arr[0] < 0) {
    return [0, 0];
  }
  if (arr[0] === 0 && arr[1] < 10) {
    return [0, 0];
  }

  return arr;
}

function solution(video_len, pos, op_start, op_end, commands) {
  var answer = "";

  let videoArr = video_len.split(":").map((item) => Number(item));
  let posArr = pos.split(":").map((item) => Number(item));
  let opStartArr = op_start.split(":").map((item) => Number(item));
  let opEndArr = op_end.split(":").map((item) => Number(item));

  for (let i = 0; i < commands.length; i++) {
    if (isInOp(opStartArr, opEndArr, posArr)) {
      posArr[0] = opEndArr[0];
      posArr[1] = opEndArr[1];
    }

    if (commands[i] === "next") {
      posArr = moveNext(posArr, videoArr);
    } else {
      posArr = movePrev(posArr);
    }

    if (isInOp(opStartArr, opEndArr, posArr)) {
      posArr[0] = opEndArr[0];
      posArr[1] = opEndArr[1];
    }
  }

  answer = `${posArr[0] < 10 ? "0" + posArr[0] : posArr[0]}:${
    posArr[1] < 10 ? "0" + posArr[1] : posArr[1]
  }`;
  return answer;
}
