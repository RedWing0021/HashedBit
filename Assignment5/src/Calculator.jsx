import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const handleAddition = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
    };

    const handleSubtraction = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
    };

    const handleMultiplication = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    };

    const handleDivision = () => {
        if (num2 !== '0') {
            setResult(parseFloat(num1) / parseFloat(num2));
        } else {
            setResult('Cannot divide by zero');
        }
    };

    return (
        <div>
            <h1>Simple Calculator</h1>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
            />
            <div>
                <button onClick={handleAddition}>Add</button>
                <button onClick={handleSubtraction}>Subtract</button>
                <button onClick={handleMultiplication}>Multiply</button>
                <button onClick={handleDivision}>Divide</button>
            </div>
            <div>
                <h2>Result: {result !== null ? result : 'No calculation yet'}</h2>
            </div>
        </div>
    );
}

export default Calculator;
