function canConstruct(ransomNote, magazine) {
    var ransomSet = new Set(ransomNote);
    var match = true;
    ransomSet.forEach(function (value) {
        var _a, _b;
        var charRegExp = new RegExp(value, "g");
        var ransomMatch = (_a = ransomNote.match(charRegExp)) === null || _a === void 0 ? void 0 : _a.length;
        var magazineMatch = (_b = magazine.match(charRegExp)) === null || _b === void 0 ? void 0 : _b.length;
        if (magazineMatch == null) {
            match = false;
        }
        else {
            if (ransomMatch != null && magazineMatch != null && ransomMatch > magazineMatch)
                match = false;
        }
    });
    return match;
}
console.log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));
console.log(canConstruct("aaabb", "bbaac"));
console.log(canConstruct("a", "b"));
