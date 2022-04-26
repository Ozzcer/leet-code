function minCostConnectPoints(points) {
    var cost = 0;
    var visitedNodes = new Array(points.length).fill(false);
    var visitedNodesCount = 0;
    var edgesCreated = {};
    var edges = [];
    var travelledEdges = [];
    var vertices = [];
    for (var i = 0; i < points.length; i++) {
        vertices.push(i);
    }
    for (var i = 0; i < points.length; i++) {
        for (var j = 0; j < points.length; j++) {
            if (j === i)
                continue;
            if (edgesCreated[j.toString() + i.toString()])
                continue;
            var distance = calculateManhattanDistance(points[i], points[j]);
            edgesCreated[i.toString() + j.toString()] = distance;
            edges.push({ vertexPair: [i, j], weight: distance });
        }
    }
    edges.sort(function (a, b) { return a.weight < b.weight ? -1 : 1; });
    for (var i = 0; i < edges.length; i++) {
        // if edge selected
        travelledEdges.push(edges[i]);
        vertices[edges[i].vertexPair[1]] = findRootNode(vertices, edges[i].vertexPair[0]);
        visitedNodesCount++;
        cost += edges[i].weight;
        if (visitedNodesCount === points.length - 1)
            break;
    }
    console.log(travelledEdges);
    console.log(vertices);
    return cost;
}
;
function findRootNode(vertices, node) {
    while (vertices[node] != node) {
        node = vertices[node];
    }
    return node;
}
function calculateManhattanDistance(i, j) {
    return Math.abs(i[0] - j[0]) + Math.abs(i[1] - j[1]);
}
console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]));
// console.log(minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]]));
// console.log(minCostConnectPoints([[2, -3], [-17, -8], [13, 8], [-17, -15]]));
