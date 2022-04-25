function kWeakestRows(mat: number[][], k: number): number[] {
  let output: number[] = [];
  for (let i = 0; i < mat.length; i++) {
    mat[i] = [i, mat[i].reduce((total: number, value: number) => {
      return total + value;
    })];
  }

  mat.sort((a, b) => {
    return a[1] < b[1] ? -1 : 1;
  });

  for (let i = 0; i < k; i++) {
    output.push(mat[i][0]);
  }

  return output;
};

console.log(kWeakestRows([
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1]
], 3));

/**
 * RESULTS:
 * Runtime: 100 ms faster than 46.42%
 * Memory Usage: 45.3 MB less than 38.63%
 */