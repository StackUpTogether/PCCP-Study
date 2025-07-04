# 타겟 넘버

> 🔗 문제 링크: [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/43165) 

## 🌱 문제 설명
n개의 음이 아닌 정수들이 있다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 한다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있다.

```
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
```

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하는 함수를 작성하는 문제.


## 🤔 접근 방식
- dfs 방식을 사용하여 다음 숫자를 더했을 때, 뺐을 때를 각각 구한다.

## 💡 주요 포인트
- `index`를 사용하여 배열의 index가 배열 길이와 같으면 여태 계산한 값을 `target`과 비교해준다.
  ```js
  let dfs = (index, sum) => {
    if (index === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  };
  ```
  index가 배열 길이보다 작은 경우 dfs를 더했을 때, 뺐을 때로 각각 돌려준다.

