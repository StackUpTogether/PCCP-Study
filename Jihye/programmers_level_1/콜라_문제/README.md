# 콜라 문제

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/132267) 

## 🌱 문제 설명
빈 병 `a`개를 가져다주면 콜라 `b`병을 주는 마트가 있을 때, 빈 병 `n`개를 가져다 주면 볓 병을 받을 수 있는지 계산하는 함수를 작성하는 문제.

## 🤔 접근 방식
- 가지고있는 병의 갯수가 a보다 작아지기 전까지 반복

## 💡 주요 포인트
- 마트에 주는 병의 갯수는 `가지고 있는 병의 갯수를 a로 나눈 값의 몫 * a`개 이며 받는 병의 개수는 `가지고 있는 병의 갯수를 a로 나는 값의 몫 * b`개 이다.
- 각 반복마다 현재 가지고 있는 병의 갯수를 갱신해주며 받는 병의 개수는 answer에 계속해서 더해준다.

