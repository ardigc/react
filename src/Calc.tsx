import { ChangeEventHandler, useState } from 'react';
function Calc() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  // const [result, setResult] = useState(0);
  // const [show, setShow] = useState("suma");
  const changeHandler1: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setNumber1(parseInt(ev.target.value))
  }
  const changeHandler2: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setNumber2(parseInt(ev.target.value))
  }
  // const clickHandlerSum =() => {
  //   setShow("suma")
  // }
  // const clickHandlerRes =() => {
  //   setResult(number1 - number2)
  // }
  // const clickHandlerMult =() => {
  //   setResult(number1 * number2)
  // }
  // const clickHandlerDiv =() => {
  //   setResult(number1 / number2)
  // }

  const suma = number1 + number2
  const rest = number1 - number2
  const mult = number1 * number2
  const div = number1 / number2

  return <div>
    <span style={{ fontSize: '2rem' }}>{suma}</span>
    {/* {show === "resta" && <span style={{ fontSize: '2rem' }}>{rest}</span>} */}
    <input type='number' onChange={changeHandler1} value={number1} />
    <input type='number' onChange={changeHandler2} value={number2} />
    <span>Suma: {suma}</span>
    <span> Resta: {rest}</span>
    <span> Multiplicacion: {mult}</span>
    <span> Division: {div}</span>
    {/* <button onClick={clickHandlerSum}>Sumar</button>
    <button onClick={clickHandlerRes}>Restar</button>
    <button onClick={clickHandlerMult}>Multiplicar</button>
    <button onClick={clickHandlerDiv}>Dividir</button> */}
  </div>
}
export default Calc