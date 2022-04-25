function lengthOfLongestSubstring(s) {
    var longestSubString = {};
    var currentSubString = {};
    Array.from(s).forEach(function (char, index) {
        if (char === " ")
            char = "space";
        if (currentSubString[char] != undefined) {
            if (Object.keys(currentSubString).length > Object.keys(longestSubString).length) {
                longestSubString = JSON.parse(JSON.stringify(currentSubString));
            }
            currentSubString = {};
        }
        currentSubString[char] = true;
    });
    if (Object.keys(currentSubString).length > Object.keys(longestSubString).length) {
        longestSubString = JSON.parse(JSON.stringify(currentSubString));
    }
    return Object.keys(longestSubString).length;
}
console.log(lengthOfLongestSubstring("dvdf"));
