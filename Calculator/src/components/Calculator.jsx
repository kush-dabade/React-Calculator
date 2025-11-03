import { useState } from "react";
import "../index.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  // Append value to the input
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Safely evaluate the expression
  const handleCalculate = () => {
    try {
      // Using Function() instead of eval() for slightly safer evaluation
      // You could replace this with a math library like "mathjs" for production use
      const result = new Function(`return ${input}`)();
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Clear the input
  const handleClear = () => setInput("");

  return (
    <div className="calculator">
      <input
        type="text"
        className="value"
        value={input}
        readOnly
        placeholder="0"
      />

      <div className="buttons">
        <button className="clear" onClick={handleClear}>C</button>
        <button onClick={() => handleClick("/")}>÷</button>
        <button onClick={() => handleClick("*")}>×</button>
        <button onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("00")}>00</button>
        <button onClick={() => handleClick(".")}>.</button>

        <button className="equal" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
