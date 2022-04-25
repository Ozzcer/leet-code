function lengthOfLongestSubstring(s: string): number {
  let temp = [];
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (temp.indexOf(s[i]) === -1) {
      temp.push(s[i]);
    } else {
      if (temp.length > maxLength) {
        maxLength = temp.length;
      }
      temp = temp.slice(temp.indexOf(s[i] + 1), temp.length);
      temp.push(s[i]);
    }
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("dvdf"));