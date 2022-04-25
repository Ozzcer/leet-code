function canConstruct(ransomNote: string, magazine: string): boolean {
  let ransomNoteLetters: any = {};
  let totalLettersRequired: number = ransomNote.length;
  for (let i: number = 0; i < ransomNote.length; i++) {
    let char: string = ransomNote.charAt(i);
    if (ransomNoteLetters[char] != undefined) {
      ransomNoteLetters[char] += 1;
    } else {
      ransomNoteLetters[char] = 1;
    }
  }

  for (let i: number = 0; i < magazine.length; i++) {
    let char: string = magazine.charAt(i);
    if (ransomNoteLetters[char] != undefined && ransomNoteLetters[char] != 0) {
      ransomNoteLetters[char] -= 1;
      totalLettersRequired -= 1;
      if (totalLettersRequired === 0) {
        return true;
      }
    }
  }

  return false
};

/**
 * RESULTS:
 * Runtime: 130 ms faster than 42.47%
 * Memory Usage: 46.1 MB less than 61.99%
 */