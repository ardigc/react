import { useState } from "react";
import { Round } from "./Round";
import { CalcButton } from "./CalcButton";
import { CalcNum } from "./CalcNum";
import { CalcSymbol } from "./CalcSymbol";
import { CalcRes } from "./calcRes";
import { CalcRem } from "./CalcRem";
import { CalcComa } from "./CalcComa";
import { CalcRare } from "./CalcRare";

function Calcfull() {
  let [operation, setOperation] = useState("")
  let [num1, setNum1] = useState(0)
  let [num1Arr, setNum1Arr] = useState([])

  const [number, setNumber] = useState(0);
  const [prevNumber, setPrevNumber] = useState("");

  function result(number: number, op: string) {
    const strNum1 = num1.toString()
    const strNumber = number.toString()

    if (operation === "+") {
      return (num1 + number)
    } else if (op === "-") {
      return (num1 - number)
    } else if (op === "x") {
      return (num1 * number)
    } else if (op === "/") {
      return (num1 / number)
    } else {
      return number
    }
    setPrevNumber(strNum1 + operation + strNumber + "=")
    num1Arr = []
  }
  return (
    <div className="calc-box">
      <Round num={number} />
      <div className="prev">{prevNumber}</div>
      <CalcButton operation={operation} num1Arr={num1Arr} setPrevNumber={setPrevNumber} setNumber={setNumber} simb="%" num1={num1} number={number} />
      <CalcRem num1Arr={num1Arr} setPrevNumber={setPrevNumber} setOperation={setOperation} setNumber={setNumber} simb="CE" setNum1Arr={setNum1Arr} setNum1={setNum1} />
      <CalcRem num1Arr={num1Arr} setPrevNumber={setPrevNumber} setOperation={setOperation} setNumber={setNumber} simb="C" setNum1Arr={setNum1Arr} setNum1={setNum1} />
      <CalcRem num1Arr={num1Arr} setPrevNumber={setPrevNumber} setOperation={setOperation} setNumber={setNumber} simb="<-" setNum1Arr={setNum1Arr} setNum1={setNum1} />
      <CalcRare setPrevNumber={setPrevNumber} number={number} setNumber={setNumber} num1Arr={num1Arr} simb="1/x" />
      <CalcRare setPrevNumber={setPrevNumber} number={number} setNumber={setNumber} num1Arr={num1Arr} simb="x^2" />
      <CalcRare setPrevNumber={setPrevNumber} number={number} setNumber={setNumber} num1Arr={num1Arr} simb="√x" />
      <CalcSymbol resFunct={result} setNum1Arr={setNum1Arr} setNum1={setNum1} operation={operation} setOperation={setOperation} setPrevNumber={setPrevNumber} setNumber={setNumber} simb="/" number={number} />
      <CalcNum setNumber={setNumber} num1Arr={num1Arr} simb="7" />
      <CalcNum setNumber={setNumber} num1Arr={num1Arr} simb="8" />
      <CalcNum setNumber={setNumber} num1Arr={num1Arr} simb="9" />
      <CalcSymbol resFunct={result} setNum1Arr={setNum1Arr} setNum1={setNum1} operation={operation} setOperation={setOperation} setPrevNumber={setPrevNumber} setNumber={setNumber} simb="x" number={number} />
      <CalcNum setNumber={setNumber} num1Arr={num1Arr} simb="4" />
      <CalcNum setNumber={setNumber} num1Arr={num1Arr} simb="5" />
      <CalcNum setNumber={setNumber} num1Arr={num1Arr} simb="6" />
      <CalcSymbol resFunct={result} setNum1Arr={setNum1Arr} setNum1={setNum1} operation={operation} setOperation={setOperation} setPrevNumber={setPrevNumber} setNumber={setNumber} simb="-" number={number} />
      <CalcNum setNumber={setNumber} num1Arr={num1Arr} simb="1" />
      <CalcNum setNumber={setNumber} num1Arr={num1Arr} simb="2" />
      <CalcNum setNumber={setNumber} num1Arr={num1Arr} simb="3" />
      <CalcSymbol resFunct={result} setNum1Arr={setNum1Arr} setNum1={setNum1} operation={operation} setOperation={setOperation} setPrevNumber={setPrevNumber} setNumber={setNumber} simb="+" number={number} />
      <CalcRare setPrevNumber={setPrevNumber} number={number} setNumber={setNumber} num1Arr={num1Arr} simb="+/-" />
      <CalcNum setNumber={setNumber} num1Arr={num1Arr} simb="0" />
      <CalcComa setNumber={setNumber} num1Arr={num1Arr} simb="," />
      <CalcRes num1={num1} resFunct={result} setNum1Arr={setNum1Arr} setNum1={setNum1} operation={operation} setOperation={setOperation} setPrevNumber={setPrevNumber} setNumber={setNumber} simb="=" number={number} />
    </div>
  );
}
export default Calcfull;
