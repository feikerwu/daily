/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  let res = [];
  let path = [0];
  backtrack(graph, res, path, 0);
  return res;
};

function backtrack(graph, res, path, cur) {
  if (path[path.length - 1] === (graph.length - 1)) {
    res.push(path.slice());
    return
  }

  for (let i = 0; i < graph[cur].length; i++) {
    path.push(graph[cur][i])
    backtrack(graph, res, path, graph[cur][i]);
    path.pop()
  }
}

// @lc code=end

