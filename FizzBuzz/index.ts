function fizzBuzz(n: number): string[] {
  let answer: string[] = [];

  for (let i = 1; i < n + 1; i++) {
    let string: string = "";
    if (i % 3 === 0) {
      string = "Fizz"
    }
    if (i % 5 === 0) {
      string += "Buzz"
    }
    if (string === "") {
      string = i.toString();
    }
    answer.push(string);
  }
  return answer;
};

/**
 * RESULTS:
 * Runtime: 83 ms faster than 67.27%
 * Memory Usage: 45.5  MB less than 39.32%
 */