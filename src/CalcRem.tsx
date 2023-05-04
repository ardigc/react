export function CalcRem(props: { num1Arr: any; setNum1Arr: any; setNum1: any; setNumber: any; setOperation: any; setPrevNumber: any; simb: any }) {
  let { setNumber, setNum1Arr, num1Arr, setNum1, setPrevNumber, simb, setOperation } = props
  function clickHandler() {
    if (simb === "<-") {
      if (num1Arr.length > 1) {
        num1Arr.pop()
        setNumber(parseFloat(num1Arr.join('')))
      } else {
        setNum1Arr([])
        setNumber(0)
      }
    } else if (simb === "CE") {
      setNum1Arr([])
      // operation="."
      setNumber(0)
    } else if (simb === "C") {
      setNum1Arr([])
      setOperation(".")
      setNumber(0)
      setPrevNumber('0')
      setNum1(0)
    }
  }
  return <button className="buttons" onClick={() => clickHandler()}>
    {simb}
  </button>
}