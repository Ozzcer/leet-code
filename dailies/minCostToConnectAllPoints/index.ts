class DisjointedSet {
  vertices: number[];
  rank: number[];

  constructor(size) {
    this.vertices = new Array(size).fill(0);
    this.rank = new Array(size).fill(0);
    for (let i = 0; i < size; ++i) {
      this.vertices[i] = i;
    }
  }

  find(node) {
    if (this.vertices[node] != node) {
      this.vertices[node] = this.find(this.vertices[node]);
    }
    return this.vertices[node];
  }

  union(node1, node2) {
    let group1 = this.find(node1);
    let group2 = this.find(node2);

    if (group1 == group2) return false;

    if (this.rank[group1] > this.rank[group2]) {
      this.vertices[group2] = group1;
    } else if (this.rank[group1] < this.rank[group2]) {
      this.vertices[group1] = group2;
    } else {
      this.vertices[group1] = group2;
      this.rank[group2] += 1;
    }

    return true;
  }
};


let minCostConnectPoints = function (points) {
  let n = points.length;
  let edges = [];

  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      let weight = Math.abs(points[i][0] - points[j][0]) +
        Math.abs(points[i][1] - points[j][1]);

      edges.push([weight, i, j]);
    }
  }

  edges.sort((a, b) => a[0] - b[0]);

  let disjointedSet = new DisjointedSet(n);
  let mstCost = 0;
  let edgesUsed = 0;

  for (let i = 0; i < edges.length && edgesUsed < n - 1; ++i) {
    let [weight, node1, node2] = edges[i];

    if (disjointedSet.union(node1, node2)) {
      mstCost += weight;
      edgesUsed++;
    }
  }

  return mstCost;
};

/**
 * 04/26/2022 15:31	Accepted	1494 ms	100.2 MB	typescript
 */