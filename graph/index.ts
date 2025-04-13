function dijkstra(
  graph: Record<string, Record<string, number>>,
  start: string
) {
  const distances: Record<string, number> = {};
  const visited: Set<string> = new Set();
  const priorityQueue: { node: string; distance: number }[] = [];

  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  priorityQueue.push({ node: start, distance: 0 });

  while (priorityQueue.length > 0) {
    // Get the node with the smallest distance
    const { node } = priorityQueue.shift()!;
    if (visited.has(node)) continue;
    visited.add(node);

    // Update distances for neighbors
    for (const neighbor in graph[node]) {
      const newDist = distances[node] + graph[node][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        priorityQueue.push({ node: neighbor, distance: newDist });
      }
    }
  }

  return distances;
}

function hasCycle(graph: Record<string, string[]>) {
  const visited = new Set<string>();
  const recursionStack = new Set<string>();

  function dfs(node: string): boolean {
    if (recursionStack.has(node)) return true; // Found a cycle
    if (visited.has(node)) return false; // Already visited node, no cycle here

    visited.add(node);
    recursionStack.add(node);

    for (const neighbor of graph[node]) {
      if (dfs(neighbor)) return true;
    }

    recursionStack.delete(node); // Remove from recursion stack once done
    return false;
  }

  for (const node in graph) {
    if (dfs(node)) return true;
  }
  return false;
}
