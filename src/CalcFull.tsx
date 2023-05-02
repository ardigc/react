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
let num1Arr: string[] = []
let operation = ""
let num1: number = 0

function Calcfull() {
  const [number, setNumber] = useState(0);
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
    } else if (index === 2) {
      console.log(num, index);
      num1Arr = []
      setNumber(0)
    } else if (index === 1) {
      console.log(num, index);
      num1Arr = []
      setNumber(0)
      setPrevNumber('0')
      num1 = 0
    } else if (index === 19) {
      console.log(num, index);
      num1 = number
      setPrevNumber(number + "+")
      num1Arr = []
      setNumber(0)
      operation = "+"
      console.log("Operacion: " + operation)
    } else if (index === 15) {
      console.log(num, index);
      num1 = number
      setPrevNumber(number + "-")
      num1Arr = []
      setNumber(0)
      operation = "-"
      console.log("Operacion: " + operation)
    } else if (index === 11) {
      console.log(num, index);
      num1 = number
      setPrevNumber(number + "*")
      num1Arr = []
      setNumber(0)
      operation = "*"
      console.log("Operacion: " + operation)
    } else if (index === 7) {
      console.log(num, index);
      num1 = number
      setPrevNumber(number + "/")
      num1Arr = []
      setNumber(0)
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
  }
  
  function redondearNumero(numero: number) {
    const strNum = numero.toString()
    console.log(strNum.length)
    console.log(Math.log10(Math.abs(numero)))
    let decimales = 16 - Math.floor(Math.log10(Math.abs(numero))) - 1;
    if (decimales > 15) {
      decimales = 15
    }
    console.log(decimales)
    let numeroRedondeado = numero.toFixed(decimales);
    return numeroRedondeado.replace(/\.?0+$/, "");
  }

  let redNum: string = "0"
  if (number === 0) {
    redNum = number.toString()
  } else {
    const strNum = number.toString()
    if (!Number.isInteger(number)) {
      redNum = redondearNumero(number)
      console.log("redondeando: " + redondearNumero(number))
    }else if(Number.isInteger(number)&&strNum.length>=16){
    redNum="desbordamiento"
    }else{
      redNum = number.toString()
      console.log(strNum)
    }
  }

  return (
    <div className="calc-box">
      <div className="result">{redNum}</div>
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
