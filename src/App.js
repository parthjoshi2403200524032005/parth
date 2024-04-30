import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setResult(event.target.value);
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    const allowedKeys = [
      "+",
      "-",
      "*",
      "/",
      ".",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Enter",
      "Backspace",
      "Escape"
    ];
    if (!allowedKeys.includes(key)) {
      event.preventDefault();
    }
  };

  const handleClick = (value) => {
    if (value === "=") {
      try {
        if (result.includes("/0")) {
          setResult("Error: Division by zero");
        } else {
          setResult(eval(result));
        }
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
    } else if (value === "CE") {
      setResult(result.slice(0, -1));
    } else if (value === "AC") {
      setResult("");
    } else if (value === "M+") {
      // Implement memory storage
    } else if (value === "M-") {
      // Implement memory subtraction
    } else if (value === "MR") {
      // Implement memory recall
    } else if (value === "MC") {
      // Implement memory clear
    } else if (value === "%") {
      setResult(eval(result) / 100);
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col w-[400px] h-[500px] p-4 rounded-lg shadow-md bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
        <input
          type="text"
          className="mb-4 px-4 py-2 border border-gray-300 rounded-lg text-lg font-semibold focus:outline-none"
          value={result}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div className="grid grid-cols-4 gap-4">
          {["7", "8", "9", "/"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-lg font-semibold hover:bg-gray-200 focus:outline-none"
            >
              {value}
            </button>
          ))}
          {["4", "5", "6", "*"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-lg font-semibold hover:bg-gray-200 focus:outline-none"
            >
              {value}
            </button>
          ))}
          {["1", "2", "3", "-"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-lg font-semibold hover:bg-gray-200 focus:outline-none"
            >
              {value}
            </button>
          ))}
          <button
            onClick={() => handleClick("CE")}
            className="px-4 py-2 border border-gray-300 rounded-lg text-lg font-semibold hover:bg-gray-200 focus:outline-none"
          >
            CE
          </button>
          <button
            onClick={() => handleClick("0")}
            className="px-4 py-2 border border-gray-300 rounded-lg text-lg font-semibold hover:bg-gray-200 focus:outline-none"
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            className="px-4 py-2 border border-gray-300 rounded-lg text-lg font-semibold hover:bg-gray-200 focus:outline-none"
          >
            .
          </button>
          <button
            onClick={() => handleClick("AC")}
            className="row-span-2 px-4 py-2 border border-gray-300 rounded-lg text-lg font-semibold hover:bg-gray-200 focus:outline-none"
          >
            AC
          </button>
          <button
            onClick={() => handleClick("=")}
            className="col-span-2 px-4 py-2 border border-gray-300 rounded-lg text-lg font-semibold hover:bg-gray-200 focus:outline-none"
          >
            =
          </button>
          <button
            onClick={() => handleClick("+")}
            className="px-4 py-2 border border-gray-300 rounded-lg text-lg font-semibold hover:bg-gray-200 focus:outline-none"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
