import { useState } from "react";

const buttons = [
  "%",
  "CE",
  "C",
  "<-",
  "1/x",
  "x^2",
  "√x",
  "/",
  1,
  2,
  3,
  "x",
  4,
  5,
  6,
  "-",
  7,
  8,
  9,
  "+",
  "+/-",
  0,
  ",",
  "=",
];

function Calcfull() {
  const [number, setNumber] = useState(0);
  const prevNumber = 0;
  function clickHandler(num: string, index: number) {
    console.log(num);
  }
  return (
    <div className="calc-box">
      <div className="result">{number}</div>
      <div className="prev">{prevNumber}</div>
      {buttons.map((number, index) => (
        <button
          key={index}
          className={"numer-" + index}
          onClick={() => clickHandler(`${number}`, index)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}
export default Calcfull;
