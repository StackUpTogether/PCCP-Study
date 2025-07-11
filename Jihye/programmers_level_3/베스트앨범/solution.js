// 베스트앨범

function solution(genres, plays) {
  let answer = [];
  let albums = [];
  let totalPlays = {};

  for (let i = 0; i < genres.length; i++) {
    albums.push({ genre: genres[i], index: i, plays: plays[i] });
    if (totalPlays[genres[i]] === undefined) {
      totalPlays[genres[i]] = { plays: plays[i], albums: [[i, plays[i]]] };
    } else {
      totalPlays[genres[i]].plays += plays[i];
      totalPlays[genres[i]].albums.push([i, plays[i]]);
    }
  }

  let sortedPlays = Object.entries(totalPlays).sort(
    (a, b) => b[1].plays - a[1].plays
  );

  for (let i = 0; i < sortedPlays.length; i++) {
    sortedPlays[i][1].albums.sort((a, b) => b[1] - a[1]);

    answer.push(sortedPlays[i][1].albums[0][0]);
    if (sortedPlays[i][1].albums.length > 1) {
      answer.push(sortedPlays[i][1].albums[1][0]);
    }
  }

  return answer;
}
