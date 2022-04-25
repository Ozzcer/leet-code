function kWeakestRows(mat: number[][], k: number): number[] {
  let y: number = mat.length;
  let x: number = mat[0].length;
  let visited: Uint8Array = new Uint8Array(y);
  let output = [];

  for (let j: number = 0; j <= x; j++) {
    for (let i: number = 0; i < y; i++) {
      if (!visited[i] && !mat[i][j]) {
        output.push(i);
        visited[i]++;
      }
      if (output.length === k) return output;
    }
  }
};

console.log(kWeakestRows([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]], 1));

/**
 * RESULTS:
 * Runtime: 66 ms faster than 94.08%
 * Memory Usage: 45.5 MB less than 32.40%
 */