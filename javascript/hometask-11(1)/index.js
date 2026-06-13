var finalSum = 0;

function numbers(num) {
    finalSum += num;

    return finalSum;
}

console.log("sum(5): " + numbers(5));
console.log("sum(10): " + numbers(10));
console.log("sum(15): " + numbers(15));