import { useState } from "react";
import { Round } from "./Round";
import { CalcButton } from "components/buttons/CalcButton";
import { CalcNum } from "./CalcNum";
import { CalcSymbol } from "./CalcSymbol";
import { CalcRes } from "./calcRes";
import { CalcRem } from "./CalcRem";
import { CalcComa } from "./CalcComa";
import { CalcRare } from "./CalcRare";

function Calcfull() {
  const [operation, setOperation] = useState("")
  const [num1, setNum1] = useState(0)
  const [num1Arr, setNum1Arr] = useState<string>('')

  const [number, setNumber] = useState(0);
  const [prevNumber, setPrevNumber] = useState("");

  function result(number: number, op: string) {
    const strNum1 = num1.toString()
    const strNumber = number.toString()
    let result;
    if (operation === "+") {
      result = (num1 + number)
    } else if (op === "-") {
      result = (num1 - number)
    } else if (op === "x") {
      result = (num1 * number)
    } else if (op === "/") {
      result = (num1 / number)
    } else {
      result = number
    }
    setPrevNumber(strNum1 + operation + strNumber + "=")
    setNum1Arr('')
    return result
  }

  const clickHandlerCreator = (simb: string) => {
    return () => {
      setNumber(parseFloat(num1Arr + simb))
    }
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
      <CalcNum fn={clickHandlerCreator} simb="7" />
      <CalcNum fn={clickHandlerCreator} simb="8" />
      <CalcNum fn={clickHandlerCreator} simb="9" />
      <CalcSymbol resFunct={result} setNum1Arr={setNum1Arr} setNum1={setNum1} operation={operation} setOperation={setOperation} setPrevNumber={setPrevNumber} setNumber={setNumber} simb="x" number={number} />
      <CalcNum fn={clickHandlerCreator} simb="4" />
      <CalcNum fn={clickHandlerCreator} simb="5" />
      <CalcNum fn={clickHandlerCreator} simb="6" />
      <CalcSymbol resFunct={result} setNum1Arr={setNum1Arr} setNum1={setNum1} operation={operation} setOperation={setOperation} setPrevNumber={setPrevNumber} setNumber={setNumber} simb="-" number={number} />
      <CalcNum fn={clickHandlerCreator} simb="1" />
      <CalcNum fn={clickHandlerCreator} simb="2" />
      <CalcNum fn={clickHandlerCreator} simb="3" />
      <CalcSymbol resFunct={result} setNum1Arr={setNum1Arr} setNum1={setNum1} operation={operation} setOperation={setOperation} setPrevNumber={setPrevNumber} setNumber={setNumber} simb="+" number={number} />
      <CalcRare setPrevNumber={setPrevNumber} number={number} setNumber={setNumber} num1Arr={num1Arr} simb="+/-" />
      <CalcNum fn={clickHandlerCreator} simb="0" />
      <CalcComa setNumber={setNumber} num1Arr={num1Arr} simb="," />
      <CalcRes num1={num1} resFunct={result} setNum1Arr={setNum1Arr} setNum1={setNum1} operation={operation} setOperation={setOperation} setPrevNumber={setPrevNumber} setNumber={setNumber} simb="=" number={number} />
    </div>
  );
}
export default Calcfull;
