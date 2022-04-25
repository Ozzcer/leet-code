function numberOfStepsOld(num: number): number {
  let count = 0;
  while (num > 0) {
    console.log(num);
    if (num % 2) count++, num--;
    else num = num / 2, count++;
  }
  return count;
};

function numberOfSteps(num: number): number {

  let count = 0;
  if ((num | 1) == num) count++, num -= 1;
  while (num > 0) {
    num = num >>> 1;
    count++;
    if ((num | 1) == num) count++, num -= 1;
  }
  return (count);
};

/**
 * RESULTS:
 * Runtime: 74 ms faster than 69.40%
 * Memory Usage: 43.1 MB less than 56.72%
 */