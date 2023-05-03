import { useState } from "react";
import { Round } from "./Round";
import { CalcButton } from "./CalcButton";
import { CalcNum } from "./CalcNum";
import { CalcSymbol } from "./CalcSymbol";
import { CalcRes } from "./calcRes";
import { CalcRem } from "./CalcRem";
import { CalcComa } from "./CalcComa";
import { CalcRare } from "./CalcRare";

// const buttons = [
//   "%",
//   "CE",
//   "C",
//   "<-",
//   "1/x",
//   "x^2",
//   "√x",
//   "/",
//   1,
//   2,
//   3,
//   "x",
//   4,
//   5,
//   6,
//   "-",
//   7,
//   8,
//   9,
//   "+",
//   "+/-",
//   0,
//   ",",
//   "=",
// ];


function Calcfull() {
  let [operation, setOperation] = useState("")
  let [num1, setNum1] = useState(0)
  let [num1Arr, setNum1Arr] = useState([])

  const [number, setNumber] = useState(0);
  const [prevNumber, setPrevNumber] = useState("");
  //hooq
  // function clickHandler(num: string, index: number) {
  //   if (index === 8 || index === 9 || index === 10 || index === 12 || index === 13 || index === 14 || index === 16 || index === 17 || index === 18 || index === 21) {
  //     console.log(num, index);
  //     num1Arr.push(num)
  //     setNumber(parseFloat(num1Arr.join('')))
  //   } else if (index === 3) {
  //     console.log(num, index);
  //     num1Arr.pop()
  //     setNumber(parseFloat(num1Arr.join('')))
  //   } else if (index === 22) {
  //     console.log(num, index);
  //     num1Arr.push(".")
  //     console.log(num1Arr.join(''))
  //     setNumber(parseFloat(num1Arr.join('')))
  //   } else if (index === 20) {
  //     console.log(num, index);
  //     if (num1Arr[0] === "-") {
  //       num1Arr.splice(0, 1)
  //       setNumber(parseFloat(num1Arr.join('')))
  //     } else {
  //       num1Arr.unshift("-")
  //       console.log(num1Arr.join(''))
  //       setNumber(parseFloat(num1Arr.join('')))
  //     }
  //   } else if (index === 1) {
  //     console.log(num, index);
  //     num1Arr = []
  //     // operation="."
  //     setNumber(0)
  //   } else if (index === 2) {
  //     console.log(num, index);
  //     num1Arr = []
  //     operation="."
  //     setNumber(0)
  //     setPrevNumber('0')
  //     num1 = 0
  //   } else if (index === 19) {
  //     console.log(num, index);
  //     const res=result(number);
  //     // setNumber(result(number))
  //     console.log(res)
  //     num1 = res
  //     setPrevNumber(num1 + "+")
  //     num1Arr = []
  //     setNumber(res)
  //     operation = "+"
  //     console.log("Operacion: " + operation)
  //   } else if (index === 15) {
  //     const res=result(number);
  //     // setNumber(result(number))
  //     console.log(num, index);
  //     num1 = res
  //     setNumber(res)
  //     setPrevNumber(num1 + "-")
  //     num1Arr = []
  //     operation = "-"
  //     console.log("Operacion: " + operation)
  //   } else if (index === 11) {
  //     // setNumber(result(number))
  //     console.log(num, index);
  //     const res=result(number);
  //     num1 = res
  //     setNumber(res)
  //     setPrevNumber(num1 + "*")
  //     num1Arr = []
  //     operation = "*"
  //     console.log("Operacion: " + operation)
  //   } else if (index === 7) {
  //     const res=result(number);
  //     // setNumber(result(number))
  //     console.log(num, index);
  //     num1 = res
  //     setNumber(res)
  //     setPrevNumber(num1 + "/")
  //     num1Arr = []
  //     operation = "/"
  //     console.log("Operacion: " + operation)
  //   } else if (index === 4) {
  //     console.log(num, index);
  //     setPrevNumber("1/(" + number + (")"))
  //     num1Arr = []
  //     setNumber(1 / number)
  //     // operation = "1/"
  //     // console.log("Operacion: " + operation)
  //   } else if (index === 5) {
  //     console.log(num, index);
  //     setPrevNumber("sqr(" + number + ")")
  //     num1Arr = []
  //     setNumber(number * number)
  //     // operation = "sqr"
  //     // console.log("Operacion: " + operation)
  //   } else if (index === 6) {
  //     console.log(num, index);
  //     setPrevNumber("sqrt(" + number + ")")
  //     num1Arr = []
  //     setNumber(Math.sqrt(number))
  //     // operation = "sqr"
  //     // console.log("Operacion: " + operation)
  //   } else if (index === 0) {
  //     console.log(num, index);
  //     const porcentaje = (num1*number)/100
  //     const strNum1 = num1.toString()
  //     const strNumber = number.toString()
  //     if (operation === "+") {
  //       console.log(num, index);
  //       setNumber(num1 + porcentaje)
  //     } else if (operation === "-") {
  //       console.log(num, index);
  //       setNumber(num1 - porcentaje)
  //     } else if (operation === "*") {
  //       console.log(num, index);
  //       setNumber(num1 * porcentaje)
  //     } else if (operation === "/") {
  //       console.log(num, index);
  //       setNumber(num1 / porcentaje)
  //     } else {
  //       console.log("No hay operacion")
  //     }
  //     setPrevNumber(strNum1 + operation + strNumber + "%=")
  //     num1Arr = []
  //   } else if (index === 23) {
  //     const strNum1 = num1.toString()
  //     const strNumber = number.toString()
  //     if (operation === "+") {
  //       console.log(num, index);
  //       setNumber(num1 + number)
  //     } else if (operation === "-") {
  //       console.log(num, index);
  //       setNumber(num1 - number)
  //     } else if (operation === "*") {
  //       console.log(num, index);
  //       setNumber(num1 * number)
  //     } else if (operation === "/") {
  //       console.log(num, index);
  //       setNumber(num1 / number)
  //     } else {
  //       console.log("No hay operacion")
  //     }
  //     setPrevNumber(strNum1 + operation + strNumber + "=")
  //     num1Arr = []
  //   } else {
  //     console.log("es un simbolo")
  //     console.log(num, index);
  //   }
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
  // }
  return (
    <div className="calc-box">

      {/* Podemos pasar estado a un componente */}
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
      {/* {buttons.map((number, index) => (
        <button
          key={index}
          className={"numer-" + index+" buttons"}
          // onClick={() => clickHandler(`${number}`, index)}
        >
          {number}
        </button>
      ))} */}
    </div>
  );
}
export default Calcfull;
