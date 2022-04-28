const MAX: number = 9007199254740991;
const ROW: number = 0;
const COL: number = 1;
const EFFORT: number = 2;
const MOVEMENTS: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]];


function minimumEffortPath(heights: number[][]): number {
  const COLS: number = heights[0].length;
  const ROWS: number = heights.length;
  let visited: boolean[][] = new Array(ROWS);
  let bestEfforts: number[][] = new Array(ROWS);
  for (let i = 0; i < ROWS; i++) {
    visited[i] = new Array(COLS).fill(false);
    bestEfforts[i] = new Array(COLS).fill(MAX);
  }
  let queue: number[][] = [];

  bestEfforts[0][0] = 0;
  queue.push([0, 0, 0]);

  while (queue.length > 0) {
    let node: number[] = queue.shift();
    // console.log("EFFORTS", bestEfforts);
    // console.log("VISITED", visited);
    // console.log("------------------");

    // check if visited
    if (visited[node[ROW]][node[COL]]) continue;

    let currentEffort = node[EFFORT];

    // check if at end
    if (node[ROW] === ROWS - 1 && node[COL] === COLS - 1) return currentEffort;

    visited[node[ROW]][node[COL]] = true;

    MOVEMENTS.forEach(movement => {
      let row: number = node[ROW] + movement[ROW];
      let col: number = node[COL] + movement[COL];

      if (row >= 0 && row < ROWS && col >= 0 && col < COLS && !visited[row][col]) {
        let newEffort = Math.max(currentEffort, Math.abs(heights[row][col] - heights[node[ROW]][node[COL]]));
        if (newEffort < bestEfforts[row][col]) {
          bestEfforts[row][col] = newEffort;
          queue = insertIntoQueue(queue, [row, col, newEffort]);
        }
      }
    });
  }

  return 0;
};

function insertIntoQueue(queue: number[][], item: number[]): number[][] {
  for (let i = 0; i < queue.length; i++) {
    if (item[EFFORT] < queue[i][EFFORT]) {
      return [...queue.slice(0, i), item, ...queue.slice(i)];
    }
  }
  queue.push(item);
  return queue;
}

// console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]]));
// console.log(minimumEffortPath([[1, 2, 3], [3, 8, 4], [5, 3, 5]]));
// console.log(minimumEffortPath([[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]]));

/**
 * 04/28/2022 15:40	Accepted	2026 ms	61.1 MB	typescript
 */