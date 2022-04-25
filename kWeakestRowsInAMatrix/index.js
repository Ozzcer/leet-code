function kWeakestRows(mat, k) {
    var y = mat.length, x = mat[0].length, vis = new Uint8Array(y), ans = [];
    for (var j = 0; j <= x; j++) {
        console.log(mat[j]);
        for (var i = 0; i < y; i++) {
            if (!vis[i] && !mat[i][j])
                ans.push(i), vis[i]++;
            console.log(vis);
            if (ans.length === k)
                return ans;
        }
    }
}
;
console.log(kWeakestRows([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
], 3));
