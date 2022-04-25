const romanConversions = {
  "M": 1000,
  "D": 500,
  "C": 100,
  "L": 50,
  "X": 10,
  "V": 5,
  "I": 1,
}

function romanToInt(s: string): number {
  let previousValue = romanConversions[s.charAt(s.length - 1)]; // initialise first value
  let total = previousValue; 
  for (let i: number = s.length - 2; i >= 0; i--){
    let currentValue: number = romanConversions[s.charAt(i)];
    total += previousValue > currentValue ? -currentValue : currentValue;
    previousValue = currentValue;
  }
  return total;
};

/**
 * RESULTS:
 * Runtime: 138ms faster than 80.15%
 * Memory Usage: 47MB less than 98.49%
 */