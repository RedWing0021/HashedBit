function findTax(salary) {
    let taxRate;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            return 'Invalid salary';
    }
    return salary * taxRate;
}

// Example usage
console.log(findTax(400000));   // 0
console.log(findTax(800000));   // 80000
console.log(findTax(1200000));  // 240000
console.log(findTax(2000000));  // 600000
