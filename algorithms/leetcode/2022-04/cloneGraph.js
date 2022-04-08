// Restate
// make a deep copy of an undirected graph

// Example
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

// Input: adjList = [[]]
// Output: [[]]
// Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

// Input: adjList = []
// Output: []
// Explanation: This an empty graph, it does not have any nodes.

/*
tracking what nodes we have visited will keep this from running infinitely

we can do a depth first search and go into each neighbor node until we get back to the beginning

along the way we track what nodes we've visited so we know when we get back to the start and we can't backtrack

from the last node, we fill out all the neighboring nodes using the copies created along the way stored in the visited map

once this last node has all its neighbors, it will return a reference to itsel for the previous node to add to its neighbor list.
*/

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function (node, visited = new Map()) {
  if (!node) return null;
  if (visited.has(node.val)) return visited.get(node.val);

  let nodeCopy = new Node(node.val, []);
  visited.set(node.val, nodeCopy);

  for (n of node.neighbors) {
    neighbor = cloneGraph(n, visited);
    nodeCopy.neighbors.push(neighbor);
  }

  return nodeCopy;
};
