function twoSum(nums: number[], target: number): number[] {
  let dict = {}
  let answer: number[] = [];
  nums.forEach((num, index) => {
    if (dict[num] == undefined) {
      dict[num] = index;
    }
    let remaining: number = target - num;
    if (dict[remaining] != undefined) {
      if (index.toString() != dict[remaining]) {
        answer = [dict[remaining], index];
      }
    }
  });
  return answer;
};