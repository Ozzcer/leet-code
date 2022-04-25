function kWeakestRows(mat, k) {
    var y = mat.length;
    var x = mat[0].length;
    var visited = new Uint8Array(y);
    var output = [];
    for (var j = 0; j <= x; j++) {
        for (var i = 0; i < y; i++) {
            if (!visited[i] && !mat[i][j]) {
                output.push(i);
                visited[i]++;
            }
            if (output.length === k)
                return output;
        }
    }
}
;
console.log(kWeakestRows([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]], 1));
/**
 * RESULTS:
 * Runtime: 100 ms faster than 46.42%
 * Memory Usage: 45.3 MB less than 38.63%
 */ 
