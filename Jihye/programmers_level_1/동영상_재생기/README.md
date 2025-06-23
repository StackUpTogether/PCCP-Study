# 동영상 재생기

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/340213) 

## 🌱 문제 설명
10초 전으로 이동, 10초 후로 이동, 오프닝 건너뛰기의 3가지 기능을 지원하는 동영상 재생기가 있다.

- 사용자가 `prev` 명령을 입력할 경우 동영상의 재생 위치를 현재 위치에서 10초 전으로 이동한다. 현재 위치가 10초 미만인 경우 영상의 처음 위치(0분 0초)로 이동한다.
- 사용자가 `next` 명령을 입력할 경우 동영상의 재생 위치를 현재 위치에서 10초 후로 이동한다. 동영상의 남은 시간이 10초 미만인 경우 영상의 마지막 위치로 이동한다.
- 현재 재생 위치가 오프닝 구간(`op_start` <= 현재 재생 위치 <= `op_end`)인 경우 자동으로 오프닝이 끝나는 위치로 이동한다.

동영상의 길이를 나타내는 문자열 `video_len`, 기능이 수행되기 직전의 재생위치를 나타내는 문자열 `pos`, 오프닝 시작 시각을 나타내는 문자열 `op_start`, 오프닝이 끝나는 시각을 나타내는 문자열 `op_end`, 사용자의 입력을 나타내는 1차원 문자열 배열 `commands`가 매개변수로 주어질 때, 사용자의 입력이 모두 끝난 후 동영상의 위치를 "`mm`:`ss`" 형식으로 return 하는 함수를 작성하는 문제.

## 🤔 접근 방식
- 문자열을 `split()`을 사용하여 숫자 배열로 변경.
- 기능을 수행하기 전과 후에 오프닝 구간인지를 판별.
- 각 명령어를 입력했을 때 10초씩 움직이는 함수를 따로 만들기.

## 💡 주요 포인트
- 각각의 문자열을 연산이 가능하도록 숫자 배열로 변경
  ```js
  let videoArr = video_len.split(":").map((item) => Number(item));
  let posArr = pos.split(":").map((item) => Number(item));
  let opStartArr = op_start.split(":").map((item) => Number(item));
  let opEndArr = op_end.split(":").map((item) => Number(item));
  ```

- 오프닝 구간인지를 `boolean` 값으로 반환하는 함수 구현
  ```js
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
  ```

- 앞/뒤로 10초씩 움직이는 함수 구현
  - 현재 위치에서 10초 전으로 이동했을 때 시작 시간(0분 0초)보다 작은 경우 `[0,0]` 반환.
  - 현재 위치에서 10초 후로 이동했을 때 마지막 시간보다 작은 경우 영상의 마지막 위치 반환.
  - 분 단위가 바뀌는 경우 확인 필수.

- 배열 값을 복사해야지 참조를 하면 안 됨
  - 다음과 같이 값을 복사를 해 주어야 한다.
    ```js
    if (isInOp(opStartArr, opEndArr, posArr)) {
      posArr[0] = opEndArr[0];
      posArr[1] = opEndArr[1];
    }
    ```
  - 이렇게 참조를 하게 되면 두 변수가 같은 배열을 가리키고 있어서 내용을 바꾸면 둘 다 바뀌게 된다.
    ```js
    if (isInOp(opStartArr, opEndArr, posArr)) {
      posArr = opEndArr;
    }
    ```
- 첫 시작 위치가 오프닝 구간인지도 확인해주어야 하기 때문에 반복문 내부에서 오프닝 구간인지를 사용자 입력 커맨드 전/후로 확인.