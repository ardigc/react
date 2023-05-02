import { useState } from "react";
import { Component } from "./Comp";

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
let num1Arr: string[] = []
let operation = ""
let num1: number = 0


function Calcfull() {
  const [number, setNumber] = useState(0);
  //hooq
  const [prevNumber, setPrevNumber] = useState("");
  function clickHandler(num: string, index: number) {
    if (index === 8 || index === 9 || index === 10 || index === 12 || index === 13 || index === 14 || index === 16 || index === 17 || index === 18 || index === 21) {
      console.log(num, index);
      num1Arr.push(num)
      setNumber(parseFloat(num1Arr.join('')))
    } else if (index === 3) {
      console.log(num, index);
      num1Arr.pop()
      setNumber(parseFloat(num1Arr.join('')))
    } else if (index === 22) {
      console.log(num, index);
      num1Arr.push(".")
      console.log(num1Arr.join(''))
      setNumber(parseFloat(num1Arr.join('')))
    } else if (index === 20) {
      console.log(num, index);
      if (num1Arr[0] === "-") {
        num1Arr.splice(0, 1)
        setNumber(parseFloat(num1Arr.join('')))
      } else {
        num1Arr.unshift("-")
        console.log(num1Arr.join(''))
        setNumber(parseFloat(num1Arr.join('')))
      }
    } else if (index === 1) {
      console.log(num, index);
      num1Arr = []
      setNumber(0)
    } else if (index === 2) {
      console.log(num, index);
      num1Arr = []
      setNumber(0)
      setPrevNumber('0')
      num1 = 0
    } else if (index === 19) {
      console.log(num, index);
      const res=result(number);
      // setNumber(result(number))
      console.log(res)
      num1 = res
      setPrevNumber(num1 + "+")
      num1Arr = []
      setNumber(res)
      operation = "+"
      console.log("Operacion: " + operation)
    } else if (index === 15) {
      const res=result(number);
      // setNumber(result(number))
      console.log(num, index);
      num1 = res
      setNumber(res)
      setPrevNumber(num1 + "-")
      num1Arr = []
      operation = "-"
      console.log("Operacion: " + operation)
    } else if (index === 11) {
      // setNumber(result(number))
      console.log(num, index);
      const res=result(number);
      num1 = res
      setNumber(res)
      setPrevNumber(num1 + "*")
      num1Arr = []
      operation = "*"
      console.log("Operacion: " + operation)
    } else if (index === 7) {
      const res=result(number);
      // setNumber(result(number))
      console.log(num, index);
      num1 = res
      setNumber(res)
      setPrevNumber(num1 + "/")
      num1Arr = []
      operation = "/"
      console.log("Operacion: " + operation)
    } else if (index === 4) {
      console.log(num, index);
      setPrevNumber("1/(" + number + (")"))
      num1Arr = []
      setNumber(1 / number)
      // operation = "1/"
      // console.log("Operacion: " + operation)
    } else if (index === 5) {
      console.log(num, index);
      setPrevNumber("sqr(" + number + ")")
      num1Arr = []
      setNumber(number * number)
      // operation = "sqr"
      // console.log("Operacion: " + operation)
    } else if (index === 6) {
      console.log(num, index);
      setPrevNumber("sqrt(" + number + ")")
      num1Arr = []
      setNumber(Math.sqrt(number))
      // operation = "sqr"
      // console.log("Operacion: " + operation)
    } else if (index === 0) {
      console.log(num, index);
      const porcentaje = (num1*number)/100
      const strNum1 = num1.toString()
      const strNumber = number.toString()
      if (operation === "+") {
        console.log(num, index);
        setNumber(num1 + porcentaje)
      } else if (operation === "-") {
        console.log(num, index);
        setNumber(num1 - porcentaje)
      } else if (operation === "*") {
        console.log(num, index);
        setNumber(num1 * porcentaje)
      } else if (operation === "/") {
        console.log(num, index);
        setNumber(num1 / porcentaje)
      } else {
        console.log("No hay operacion")
      }
      setPrevNumber(strNum1 + operation + strNumber + "%=")
      num1Arr = []
    } else if (index === 23) {
      const strNum1 = num1.toString()
      const strNumber = number.toString()
      if (operation === "+") {
        console.log(num, index);
        setNumber(num1 + number)
      } else if (operation === "-") {
        console.log(num, index);
        setNumber(num1 - number)
      } else if (operation === "*") {
        console.log(num, index);
        setNumber(num1 * number)
      } else if (operation === "/") {
        console.log(num, index);
        setNumber(num1 / number)
      } else {
        console.log("No hay operacion")
      }
      setPrevNumber(strNum1 + operation + strNumber + "=")
      num1Arr = []
    } else {
      console.log("es un simbolo")
      console.log(num, index);
    }
    function result(number:number) {
      // const strNum1 = num1.toString()
      // const strNumber = number.toString()
      if (operation === "+") {
        // console.log(num1)
        return (num1 + number)
      } else if (operation === "-") {
        return (num1 - number)
      } else if (operation === "*") {
        return (num1 * number)
      } else if (operation === "/") {
        return (num1 / number)
      } else {
        return number
      }
      // setPrevNumber(strNum1 + operation + strNumber + "=")
      // num1Arr = []
    }
  }
  return (
    <div className="calc-box">
      {/* <div className="result">{redNum}</div> */}
      {/* Podemos pasar estado a un componente */}
      <Component num={number} />
      <div className="prev">{prevNumber}</div>
      {buttons.map((number, index) => (
        <button
          key={index}
          className={"numer-" + index+" buttons"}
          onClick={() => clickHandler(`${number}`, index)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}
export default Calcfull;
