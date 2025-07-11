# 베스트앨범

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/42579) 

## 🌱 문제 설명
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 한다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같다.

- 속한 노래가 많이 재생된 장르를 먼저 수록한다.
- 장르 내에서 많이 재생된 노래를 먼저 수록한다.
- 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록한다.

노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하는 함수를 작성하는 문제.

단, 제한사항은 아래와 같다.

- genres[i]는 고유번호가 i인 노래의 장르이다.
- plays[i]는 고유번호가 i인 노래가 재생된 횟수이다.
- genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하이다.
- 장르 종류는 100개 미만이다.
- 장르에 속한 곡이 하나라면, 하나의 곡만 선택한다.
- 모든 장르는 재생된 횟수가 다르다.

## 🤔 접근 방식
- 장르, 인덱스, 재생 횟수가 담긴 객체를 만들어 배열에 저장
- 장르별 재생횟수를 더한 객체를 만들어 저장.
- 장르별로 재생 횟수가 많은 순서대로 정렬하여 각 장르에서 최다재생곡 2개만을 뽑아냄.

## 💡 주요 포인트
- 반복문을 돌면서 장르, 인덱스, 재생횟수가 담긴 객체를 만들어 배열 `albums`에 저장한다.
  ```js
  for (let i = 0; i < genres.length; i++) {
    albums.push({ genre: genres[i], index: i, plays: plays[i] });
    if (totalPlays[genres[i]] === undefined) {
      totalPlays[genres[i]] = { plays: plays[i], albums: [[i, plays[i]]] };
    } else {
      totalPlays[genres[i]].plays += plays[i];
      totalPlays[genres[i]].albums.push([i, plays[i]]);
    }
  }
  ```
  이 때, 장르별 총 재생횟수와 장르별 앨범을 객체로 만들어 `totalPlays` 객체에 저장시켜준다.
- 객체는 정렬이 불가능하므로 `Object.entries`를 사용해 이차원 배열로 만들어 재생횟수 내림차순으로 정렬해준다.
  ```js
  let sortedPlays = Object.entries(totalPlays).sort(
    (a, b) => b[1].plays - a[1].plays
  );
  ```
- 이후 재생 횟수가 많은 순서대로 정렬하여 각 장르에서 최다재생곡 2개의 인덱스를 정답 배열에 넣는다. 단, 곡이 1개뿐일 경우 1개만 넣어준다.
  ```js
  for (let i = 0; i < sortedPlays.length; i++) {
    sortedPlays[i][1].albums.sort((a, b) => b[1] - a[1]);

    answer.push(sortedPlays[i][1].albums[0][0]);
    if (sortedPlays[i][1].albums.length > 1) {
      answer.push(sortedPlays[i][1].albums[1][0]);
    }
  }
  ```