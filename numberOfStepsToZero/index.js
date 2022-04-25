function numberOfStepsOld(num) {
    var count = 0;
    while (num > 0) {
        console.log(num);
        if (num % 2)
            count++, num--;
        else
            num = num / 2, count++;
    }
    return count;
}
;
function numberOfSteps(num) {
    var count = 0;
    if ((num | 1) == num)
        count++, num -= 1;
    while (num > 0) {
        num = num >>> 1;
        count++;
        if ((num | 1) == num)
            count++, num -= 1;
    }
    return (count);
}
;
console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
console.log(numberOfSteps(1));
