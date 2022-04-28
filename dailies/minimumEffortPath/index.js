var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MAX = 9007199254740991;
var ROW = 0;
var COL = 1;
var EFFORT = 2;
var MOVEMENTS = [[0, 1], [0, -1], [1, 0], [-1, 0]];
function minimumEffortPath(heights) {
    var COLS = heights[0].length;
    var ROWS = heights.length;
    var visited = new Array(ROWS);
    var bestEfforts = new Array(ROWS);
    for (var i = 0; i < ROWS; i++) {
        visited[i] = new Array(COLS).fill(false);
        bestEfforts[i] = new Array(COLS).fill(MAX);
    }
    var queue = [];
    bestEfforts[0][0] = 0;
    queue.push([0, 0, 0]);
    var _loop_1 = function () {
        var node = queue.shift();
        // console.log("EFFORTS", bestEfforts);
        // console.log("VISITED", visited);
        // console.log("------------------");
        // check if visited
        if (visited[node[ROW]][node[COL]])
            return "continue";
        var currentEffort = node[EFFORT];
        // check if at end
        if (node[ROW] === ROWS - 1 && node[COL] === COLS - 1)
            return { value: currentEffort };
        visited[node[ROW]][node[COL]] = true;
        MOVEMENTS.forEach(function (movement) {
            var row = node[ROW] + movement[ROW];
            var col = node[COL] + movement[COL];
            if (row >= 0 && row < ROWS && col >= 0 && col < COLS && !visited[row][col]) {
                var newEffort = Math.max(currentEffort, Math.abs(heights[row][col] - heights[node[ROW]][node[COL]]));
                if (newEffort < bestEfforts[row][col]) {
                    bestEfforts[row][col] = newEffort;
                    queue = insertIntoQueue(queue, [row, col, newEffort]);
                }
            }
        });
    };
    while (queue.length > 0) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return 0;
}
;
function insertIntoQueue(queue, item) {
    for (var i = 0; i < queue.length; i++) {
        if (item[EFFORT] < queue[i][EFFORT]) {
            return __spreadArray(__spreadArray(__spreadArray([], queue.slice(0, i), true), [item], false), queue.slice(i), true);
        }
    }
    queue.push(item);
    return queue;
}
console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]]));
console.log(minimumEffortPath([[1, 2, 3], [3, 8, 4], [5, 3, 5]]));
console.log(minimumEffortPath([[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]]));
