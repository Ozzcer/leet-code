function maximumWealth(accounts: number[][]): number {
  let maximumWealthValue: number = -1;

  accounts.forEach((account: number[]) => {
    let wealth: number = account.reduce((total: number, value: number) => {
      return total + value;
    });

    maximumWealthValue = wealth > maximumWealthValue ? wealth : maximumWealthValue;
  });

  return maximumWealthValue;
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));

/**
 * RESULTS:
 * Runtime: 75 ms faster than 69.60%
 * Memory Usage: 44.6 MB less than 54.40%
 */