/*
 깊이 우선 탐색: 특정 방향으로 깊게 들어갔다가 빠져나감.
 인접리스트 2차원 배열로 그래프 표현가능
 Stack, 재귀함수로 구현 가능.
 -그래프 혹은 트리에서 모든 노드를 한번씩 탐색하기 위한 기본적인 방법
 -완전탐색을 수행하기 위해 사용할 수 있는 가장 간단한 방법 중 하나.
 -stack 자료구조를 사용한다.
*/

//DFS 메서드 정의
function dfs(graph, v, visted) {
  // 현재 노드를 방문 처리
  visted[v] = true;
  console.log(v);
  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visted);
    }
  }
}
// 각 노드가 연결된 정보를 표현
let graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];
// 각 노드가 방문된 정보를 표현
let visited = Array(9).fill(false);

// 정의된 DFS 함수 호출
dfs(graph, 1, visited);
