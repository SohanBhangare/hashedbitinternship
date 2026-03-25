import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (op) => {
    if (num1 === "" || num2 === "") {
      setResult("Enter both numbers");
      return;
    }

    let a = parseFloat(num1);
    let b = parseFloat(num2);

    switch (op) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        setResult("Invalid");
    }
  };

  const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="container">
      <h2 className="title">Calculator</h2>

      <input
        className="input"
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        className="input"
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="button-group">
        <button className="btn" onClick={() => calculate("+")}>+</button>
        <button className="btn" onClick={() => calculate("-")}>-</button>
        <button className="btn" onClick={() => calculate("*")}>×</button>
        <button className="btn" onClick={() => calculate("/")}>÷</button>
      </div>

      <div className="button-group">
        <button className="btn clear-btn" onClick={clearAll}>Clear</button>
      </div>

      <div className="result">
        Result: {result || 0}
      </div>
    </div>
  );
}

export default Calculator;