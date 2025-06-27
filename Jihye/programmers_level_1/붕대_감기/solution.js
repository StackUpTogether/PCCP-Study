// 붕대_감기

function solution(bandage, health, attacks) {
  let attackCount = 0;
  let bandageCount = 0;
  let healthLeft = health;

  for (let i = 0; ; i++) {
    if (attacks.length === attackCount) {
      return healthLeft;
    }

    if (attacks[attackCount][0] === i) {
      healthLeft -= attacks[attackCount][1];
      attackCount++;
      bandageCount = 0;
    } else {
      bandageCount++;
      if (bandageCount === bandage[0]) {
        healthLeft += bandage[2];
        bandageCount = 0;
      }
      healthLeft += bandage[1];
    }

    if (healthLeft > health) {
      healthLeft = health;
    }

    if (healthLeft <= 0) {
      return -1;
    }
  }
}
