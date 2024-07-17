function sumOfProducts(n1, n2) {
    const digits1 = n1.toString().split('').reverse();
    const digits2 = n2.toString().split('').reverse();
    let sum = 0;

    for (let i = 0; i < digits1.length; i++) {
        if (digits2[i] !== undefined) {
            sum += parseInt(digits1[i]) * parseInt(digits2[i]);
        }
    }
    return sum;
}

// Example usage
console.log(sumOfProducts(6, 34));    // 24 (6*4 + 0*3)
console.log(sumOfProducts(123, 456)); // 23 (3*6 + 2*5 + 1*4)
console.log(sumOfProducts(19, 28));   // 17 (9*8 + 1*2)
