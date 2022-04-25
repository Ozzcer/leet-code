function maximumWealth(accounts) {
    var maximumWealthValue = -1;
    accounts.forEach(function (account) {
        var wealth = account.reduce(function (total, value) {
            return total + value;
        });
        maximumWealthValue = wealth > maximumWealthValue ? wealth : maximumWealthValue;
    });
    return maximumWealthValue;
}
;
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));
