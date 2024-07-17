function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return 'Invalid operation';
    }
}

// Example usage
console.log(calculate(10, 5, 'add'));      // 15
console.log(calculate(10, 5, 'subtract')); // 5
console.log(calculate(10, 5, 'multiply')); // 50
console.log(calculate(10, 5, 'divide'));   // 2
